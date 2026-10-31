import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioData, ProjectItem, ReviewItem, ThemeMode } from '../types';
import { initialPortfolioData } from '../data/initialPortfolioData';

interface PortfolioContextType {
  data: PortfolioData;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  isAuthenticated: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  updatePersonalInfo: (info: Partial<PortfolioData['personalInfo']>) => void;
  updateData: (newData: PortfolioData) => void;
  addProject: (project: ProjectItem) => void;
  updateProject: (project: ProjectItem) => void;
  deleteProject: (id: string) => void;
  addReview: (review: { name: string; rating: number; comment: string }) => void;
  resetToDefault: () => void;
}

const STORAGE_KEY = 'mickael_portfolio_data_v1';
const THEME_STORAGE_KEY = 'mickael_portfolio_theme';
const AUTH_STORAGE_KEY = 'mickael_admin_auth';
const ADMIN_PASSWORD = 'Mickael754';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode;
    return saved === 'light' || saved === 'dark' || saved === 'navy' ? saved : 'light';
  });

  // Portfolio data state
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading portfolio data from localStorage', e);
    }
    return initialPortfolioData;
  });

  // Admin authentication state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
  });

  // Persist theme
  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  // Sync theme with DOM document element
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'theme-light', 'theme-dark', 'theme-navy');
    root.classList.add(`theme-${theme}`);
    if (theme === 'dark' || theme === 'navy') {
      root.classList.add('dark');
    }
    root.setAttribute('data-theme', theme);
  }, [theme]);

  // Persist data helper
  const savePortfolioData = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  const loginAdmin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const updatePersonalInfo = (info: Partial<PortfolioData['personalInfo']>) => {
    const updated: PortfolioData = {
      ...data,
      personalInfo: {
        ...data.personalInfo,
        ...info
      }
    };
    savePortfolioData(updated);
  };

  const updateData = (newData: PortfolioData) => {
    savePortfolioData(newData);
  };

  const addProject = (project: ProjectItem) => {
    const updated: PortfolioData = {
      ...data,
      projects: [project, ...data.projects]
    };
    savePortfolioData(updated);
  };

  const updateProject = (updatedProject: ProjectItem) => {
    const updated: PortfolioData = {
      ...data,
      projects: data.projects.map((p) => (p.id === updatedProject.id ? updatedProject : p))
    };
    savePortfolioData(updated);
  };

  const deleteProject = (id: string) => {
    const updated: PortfolioData = {
      ...data,
      projects: data.projects.filter((p) => p.id !== id)
    };
    savePortfolioData(updated);
  };

  const addReview = (newReview: { name: string; rating: number; comment: string }) => {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    const reviewItem: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newReview.name.trim() || 'Cliente Anônimo',
      rating: newReview.rating,
      comment: newReview.comment.trim(),
      date: formattedDate
    };
    const updated: PortfolioData = {
      ...data,
      reviews: [reviewItem, ...data.reviews]
    };
    savePortfolioData(updated);
  };

  const resetToDefault = () => {
    savePortfolioData(initialPortfolioData);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        theme,
        setTheme,
        isAdminOpen,
        setIsAdminOpen,
        isAuthenticated,
        loginAdmin,
        logoutAdmin,
        updatePersonalInfo,
        updateData,
        addProject,
        updateProject,
        deleteProject,
        addReview,
        resetToDefault
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
