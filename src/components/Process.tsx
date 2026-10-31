import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Check, ShieldCheck, Zap, Users } from 'lucide-react';

export const Process: React.FC = () => {
  const { data } = usePortfolio();
  const { strengths } = data;

  const icons = [Zap, ShieldCheck, Users];

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-white/70 dark:bg-[#0e1014]/70 border-t border-neutral-200/70 dark:border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-serif italic text-sm text-neutral-400 dark:text-neutral-500 mb-2">
            / Pontos Fortes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Meus 3 Maiores Diferenciais
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
            Habilidades consolidadas na prática que geram impacto real para empresas e projetos.
          </p>
        </div>

        {/* 3 Differential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {strengths.map((st, idx) => {
            const Icon = icons[idx] || Zap;
            const num = `0${idx + 1}`;
            return (
              <div
                key={idx}
                className="relative bg-white dark:bg-[#13161c] rounded-3xl p-6 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-neutral-200 dark:text-neutral-800 group-hover:text-neutral-900 dark:group-hover:text-brand-lime transition-colors">
                      {num}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:bg-brand-lime group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {st.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Aplicação prática comprovada</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
