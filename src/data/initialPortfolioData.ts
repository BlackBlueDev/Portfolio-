import { PortfolioData } from '../types';

export const initialPortfolioData: PortfolioData = {
  personalInfo: {
    name: 'Mickael de Lima Silva',
    fullName: 'Mickael de Lima Silva',
    age: '24 anos',
    location: 'Caruaru, PE — Brasil',
    city: 'Caruaru / PE',
    status: 'Disponível para novas oportunidades',
    headline: 'Olá, eu sou Mickael',
    titleItalic: 'Desenvolvedor & Gestor',
    shortBio: 'Profissional multidisciplinar com atuação prática em desenvolvimento de sistemas web (SaaS), manutenção de computadores, sonoplastia de eventos ao vivo e gestão operacional e financeira de negócios.',
    fullBio: 'Olá, sou Mickael de Lima Silva. Sou um profissional multidisciplinar com perfil prático ("mão na massa"), focado em unir tecnologia, gestão de negócios e operações físicas para resolver problemas reais.\n\n• Na Tecnologia: Desenvolvo aplicações web modernas (SaaS), sites e catálogos digitais com automação por voz/IA e atuo no diagnóstico, montagem e manutenção completa de computadores.\n• No Audiovisual: Opero sistemas de som, projeção, iluminação de palco e edição de vídeo para eventos institucionais.\n• Nos Negócios e Operações: Tenho experiência real em gestão de custos (CMV), precificação para atacado e varejo, controle de caixa/estoque, logística interna, manutenção predial e atendimento ao cliente.',
    profileImage: '/profile_clean.png',
    whatsapp: '(81) 99124-5328',
    whatsappLink: 'https://wa.me/5581991245328',
    email: 'mickaeldlima@hotmail.com',
    github: 'BlackBlueDev',
    githubLink: 'https://github.com/BlackBlueDev',
    instagram: '@mickaell754',
    instagramLink: 'https://www.instagram.com/mickaell754/',
    portfolioOfficial: 'https://meuportfolioofc.netlify.app/'
  },
  strengths: [
    {
      title: 'Polivalência Real (Digital + Físico)',
      description: 'Facilidade para transitar entre o digital (programar um sistema SaaS, criar sites ou formatar PCs) e o operacional físico (montar som de evento, organizar estoque ou controle produtivo).'
    },
    {
      title: 'Visão de Negócio & Economia',
      description: 'Foco em resolver problemas de forma rápida e inteligente com os recursos disponíveis, modelagem de custos (CMV) e redução de desperdícios.'
    },
    {
      title: 'Comprometimento & Comunicação',
      description: 'Acostumado tanto com rotinas operacionais pesadas e precisão técnica quanto com o trato direto e empático com clientes no balcão e nas vendas.'
    }
  ],
  skills: [
    {
      category: 'Desenvolvimento & Cloud',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Python', 'SQLite', 'Netlify', 'Cloudflare', 'Git']
    },
    {
      category: 'Hardware & Suporte',
      items: ['Manutenção de Computadores', 'Montagem de PCs', 'Diagnóstico de Hardware', 'Formatação Windows 10/11', 'Pacote Office']
    },
    {
      category: 'Negócios & Financeiro',
      items: ['Gestão de Custos (CMV)', 'Precificação Atacado/Varejo', 'Controle de Estoque', 'Operador de Caixa', 'Vendas']
    },
    {
      category: 'Audiovisual & Eventos',
      items: ['Sonorização Ao Vivo', 'Mesas de Som', 'Projeção Data Show', 'Iluminação LED', 'Edição de Vídeo']
    },
    {
      category: 'Operações & Logística',
      items: ['Logística de Eventos', 'Manutenção Predial', 'Controle de Produção', 'Atendimento ao Público']
    }
  ],
  projects: [
    {
      id: 'gestoo-app',
      title: 'O GestooApp',
      subtitle: 'SaaS de Gestão Financeira por Comando de Voz',
      category: 'tecnologia',
      categoryLabel: 'Tecnologia & SaaS',
      tag: 'SaaS • Automação por Voz',
      description: 'Plataforma SaaS moderna desenvolvida para descomplicar a rotina financeira de pequenos empreendedores (autônomos no CPF, MEI e Simples Nacional).',
      features: [
        'Captação Inteligente por Áudio: O empreendedor fala o que vendeu ou gastou, e a plataforma interpreta e lança automaticamente.',
        'Caixa e Estoque Sincronizados: Atualiza o fluxo de caixa na hora e abate/adiciona itens do estoque em tempo real.',
        'Arquitetura SaaS Moderna: Interface rápida para celular e computador com controle de assinaturas recorrentes.'
      ],
      technologies: ['SaaS', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'Automação por Voz', 'Gestão Financeira'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      link: 'https://gestooapp.com',
      partner: {
        name: 'Gabriel Arantes',
        role: 'Sócio & Co-Desenvolvedor',
        link: 'https://arantes.ga/'
      }
    },
    {
      id: 'doce-bencao',
      title: 'Doce Bênção',
      subtitle: 'Doceria Gourmet & Gestão Comercial',
      category: 'negocios',
      categoryLabel: 'Operações & Gestão',
      tag: 'Negócios • Produção Artesanal',
      description: 'Marca própria de sobremesas artesanais (Dudu Tradicional e Gourmet, pudins e sobremesas no pote) para distribuição em atacado e venda no varejo.',
      features: [
        'Padronização e Produção: Desenvolvimento técnico com mais de 10 linhas de receitas artesanais padronizadas.',
        'Presença Digital e Vendas: Plataforma web para catálogo online e captação de pedidos diretos.',
        'Engenharia de Custos: Modelagem de CMV, precificação para revendedores e controle rigoroso de insumos.'
      ],
      technologies: ['Gestão de Negócios', 'Precificação', 'Produção Artesanal', 'Web Design', 'Marketing Digital'],
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
      link: 'https://docebencao.com.br',
      instagram: 'https://instagram.com/docebencaooficial'
    },
    {
      id: 'manutencao-computadores',
      title: 'Montagem e Manutenção de Computadores',
      subtitle: 'Diagnóstico Técnico & Otimização de Hardware',
      category: 'hardware',
      categoryLabel: 'Hardware & Suporte',
      tag: 'Hardware • Assistência Técnica',
      description: 'Serviço técnico especializado no reparo, montagem e otimização de computadores desktops para uso doméstico, escritório e máquinas gamers de alta performance.',
      features: [
        'Diagnóstico e Reparo: Identificação precisa de falhas em fontes, memórias RAM, SSDs, placas-mãe e placas de vídeo.',
        'Montagem Personalizada: Montagem do zero com cable management profissional e troca preventiva de pasta térmica.',
        'Sistemas & Softwares: Formatação Windows 10/11 limpa, backup seguro, drivers homologados e Pacote Office.'
      ],
      technologies: ['Hardware', 'Montagem de PCs', 'Diagnóstico Técnico', 'Windows 11', 'AMD Ryzen / RTX', 'Pacote Office'],
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'audiovisual-sonorizacao',
      title: 'Sonorização, Projeção & Edição de Vídeo',
      subtitle: 'Operação Técnica para Eventos Institucionais',
      category: 'audiovisual',
      categoryLabel: 'Audiovisual & Mídia',
      tag: 'Audiovisual • Ao Vivo',
      description: 'Atuação prática na sonoplastia e projeção visual de eventos, garantindo fidelidade acústica, dinâmica de palco e registro multimídia.',
      features: [
        'Projeção & Iluminação: Operação de Data Show com softwares de mídia ao vivo e controle de iluminação LED de palco.',
        'Mesas de Som: Alinhamento de canais, microfonação, equalização ao vivo e mixagem sem microfonia.',
        'Edição Multimídia: Captação e edição ágil de vídeo para divulgação institucional e redes sociais.'
      ],
      technologies: ['Áudio Ao Vivo', 'Mesas de Som', 'Projeção Data Show', 'Iluminação LED', 'Edição de Vídeo'],
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'dev-web-automacao',
      title: 'Desenvolvimento Web & Automação com IA',
      subtitle: 'Aplicações Web Rápidas, Dark Mode & Assistentes de Voz',
      category: 'tecnologia',
      categoryLabel: 'Tecnologia & Sistemas',
      tag: 'Desenvolvimento Web • Cloudflare',
      description: 'Desenvolvimento de soluções digitais modernas, landing pages com estética dark mode, catálogos e automações sem custos fixos desnecessários de servidor.',
      features: [
        'Aplicações Web Modernas: Sites responsivos com HTML5, CSS3, JavaScript, React e Node.js.',
        'Cloudflare & DNS: Hospedagem 24/7 de alta velocidade, segurança SSL e proteção de borda.',
        'Automação & IA: Criação de scripts e fluxos com IA e voz para acelerar operações no computador.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Cloudflare', 'Automação IA'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      github: 'https://github.com/BlackBlueDev'
    }
  ],
  reviews: [
    {
      id: 'rev-1',
      name: 'Gabriel Arantes',
      rating: 5,
      comment: 'Parceiro espetacular no desenvolvimento do GestooApp. Une visão prática de negócio com execução rápida de código.',
      date: '15/10/2026'
    },
    {
      id: 'rev-2',
      name: 'Cliente Manutenção PC',
      rating: 5,
      comment: 'Montou meu computador gamer com organização de cabos impecável e temperaturas baixas. Recomendo muito!',
      date: '22/10/2026'
    },
    {
      id: 'rev-3',
      name: 'Cliente Doce Bênção',
      rating: 5,
      comment: 'Sobremesas artesanais de outro nível, sabor e embalagens profissionais. Atendimento nota 10!',
      date: '28/10/2026'
    }
  ]
};
