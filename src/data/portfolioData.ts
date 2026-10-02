import { Project, Skill, ExperienceItem, Testimonial } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Sammy',
  fullName: 'Sammy (Fahad Iqbal)',
  role: 'Web Developer & Full Stack Engineer',
  specialization: 'React & Node.js Development',
  email: 'fahadiqbal9542@gmail.com',
  whatsappNumber: '+923019249721', // International format for WhatsApp: 03019249721
  whatsappDisplay: '+92 301 9249721',
  location: 'Available Globally · Remote',
  tagline: 'I design websites using Figma and develop them to bring to life',
  bio: 'Specializing in building high-performance full-stack web applications with React on the client and Node.js/Express on the backend. Passionate about silky-smooth user experiences, modular architectures, and fast APIs.',
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Completed Projects', value: '38+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Code Commits', value: '2.4K+' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'nexus-commerce',
    title: 'Nexus Modern E-Commerce Platform',
    tagline: 'Full-stack online storefront with real-time inventory and Stripe checkout',
    description: 'A production-grade e-commerce application built with React, Vite, Node.js, Express, and PostgreSQL. Features dynamic catalog filtering, instant search indexing, secure checkout workflows, and an administrative dashboard.',
    category: 'fullstack',
    image: '/src/assets/images/proj_nexus_ecommerce_1790334660487.jpg',
    tags: ['React 19', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Stripe'],
    githubUrl: 'https://github.com/example/nexus-commerce',
    liveUrl: 'https://nexus-commerce.demo.app',
    features: [
      'Sub-50ms catalog search with server-side caching',
      'End-to-end cart state management and secure checkout',
      'Inventory sync with optimistic UI updates',
      'Role-based admin console for order management'
    ],
    architecture: 'Modular React client communicating with a Node.js Express REST API, with connection pooling to PostgreSQL and Redis caching for hot product queries.',
    stats: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'API Latency', value: '< 45ms' },
      { label: 'Active Users', value: '12K+' }
    ]
  },
  {
    id: 'flow-analytics',
    title: 'FlowMetric API & Node.js Telemetry',
    tagline: 'High-throughput metrics aggregator and real-time dashboard',
    description: 'Real-time telemetry and server performance monitor built on Node.js clustering and WebSocket streams. Visualizes memory consumption, HTTP latency percentiles, and incoming webhook queues.',
    category: 'backend',
    image: '/src/assets/images/proj_flow_analytics_1790334672146.jpg',
    tags: ['Node.js', 'Express', 'WebSockets', 'Redis', 'Chart.js', 'Docker'],
    githubUrl: 'https://github.com/example/flowmetric-node',
    liveUrl: 'https://flowmetric.demo.app',
    features: [
      'Asynchronous event ingestion handling 10,000 req/sec',
      'Live bi-directional WebSocket client updates',
      'Automated rate-limiting and token bucket middleware',
      'Lightweight containerized deployment with Docker'
    ],
    architecture: 'Event-driven Node.js architecture with Redis Pub/Sub channels feeding live WebSocket sockets connected to React dashboard frontends.',
    stats: [
      { label: 'Throughput', value: '10K req/s' },
      { label: 'Memory Footprint', value: '64MB' },
      { label: 'Uptime', value: '99.98%' }
    ]
  },
  {
    id: 'collab-canvas',
    title: 'SyncSpace Real-Time Collaboration',
    tagline: 'Interactive collaborative canvas with multi-user cursor sync',
    description: 'An interactive design canvas where remote teams map user journeys and wireframe web apps together in real-time, built with React, HTML5 Canvas, and Node.js WebSockets.',
    category: 'fullstack',
    image: '/src/assets/images/proj_collab_canvas_1790334683024.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Canvas API'],
    githubUrl: 'https://github.com/example/syncspace-collab',
    liveUrl: 'https://syncspace.demo.app',
    features: [
      'Sub-20ms cursor synchronization across concurrent peers',
      'Infinite zoomable vector canvas with friction physics',
      'Real-time markdown comment threads and mentions',
      'Exportable SVG and high-resolution PNG blueprints'
    ],
    architecture: 'React frontend rendering 60fps canvas operations, synchronizing operational transforms (OT) with a Node.js socket server.',
    stats: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Max Peers/Room', value: '50+' },
      { label: 'State Sync Latency', value: '< 20ms' }
    ]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'React 19 & Next.js',
    category: 'frontend',
    level: 95,
    experience: '4 years',
    iconName: 'Code',
    description: 'Component architecture, custom hooks, Server Components, and optimized rendering loops.',
    highlight: true
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 92,
    experience: '4 years',
    iconName: 'FileCode',
    description: 'Strict type safety, generics, interface contracts, and end-to-end type sharing with backend.',
    highlight: true
  },
  {
    name: 'Tailwind CSS & Motion',
    category: 'frontend',
    level: 94,
    experience: '4 years',
    iconName: 'Palette',
    description: 'Responsive design systems, micro-interactions, dark mode, and zero-runtime overhead styles.',
    highlight: true
  },
  {
    name: 'HTML5 & Modern CSS3',
    category: 'frontend',
    level: 98,
    experience: '5 years',
    iconName: 'Layout',
    description: 'Semantic markup, accessibility (a11y), CSS Grid, Flexbox, and CSS animation performance.'
  },

  // Backend
  {
    name: 'Node.js & Runtime',
    category: 'backend',
    level: 94,
    experience: '4 years',
    iconName: 'Server',
    description: 'Asynchronous event loop, cluster scaling, streams, file system IO, and worker threads.',
    highlight: true
  },
  {
    name: 'Express.js & REST APIs',
    category: 'backend',
    level: 92,
    experience: '4 years',
    iconName: 'Cpu',
    description: 'Robust RESTful endpoints, middleware chaining, authentication, error boundaries, and rate limits.',
    highlight: true
  },
  {
    name: 'WebSockets & Socket.io',
    category: 'backend',
    level: 88,
    experience: '3 years',
    iconName: 'Zap',
    description: 'Bi-directional real-time communication, room management, and resilient heartbeat reconnects.'
  },
  {
    name: 'JWT & OAuth Security',
    category: 'backend',
    level: 90,
    experience: '3 years',
    iconName: 'ShieldCheck',
    description: 'Secure HTTP-only cookies, token rotation, bcrypt hashing, and role-based access control.'
  },

  // Database
  {
    name: 'PostgreSQL & SQL',
    category: 'database',
    level: 89,
    experience: '3 years',
    iconName: 'Database',
    description: 'Relational schemas, indexes, complex joins, transaction safety, and Drizzle/Prisma ORMs.',
    highlight: true
  },
  {
    name: 'MongoDB & Mongoose',
    category: 'database',
    level: 91,
    experience: '4 years',
    iconName: 'Layers',
    description: 'Document aggregation pipelines, indexing, sharding principles, and JSON schema validation.'
  },
  {
    name: 'Redis In-Memory Cache',
    category: 'database',
    level: 85,
    experience: '3 years',
    iconName: 'Flame',
    description: 'Key-value caching, Pub/Sub channels, session store, and API rate limiting.'
  },

  // Tools & UI/UX
  {
    name: 'Figma UI/UX Design',
    category: 'tools',
    level: 90,
    experience: '4 years',
    iconName: 'Figma',
    description: 'Wireframing, high-fidelity prototypes, component design tokens, and user flow mapping.',
    highlight: true
  },
  {
    name: 'Git & GitHub Actions',
    category: 'tools',
    level: 92,
    experience: '4 years',
    iconName: 'GitBranch',
    description: 'Branch management, CI/CD pipelines, automated testing, and semantic releases.'
  },
  {
    name: 'Vite & Webpack Build Systems',
    category: 'tools',
    level: 91,
    experience: '4 years',
    iconName: 'Package',
    description: 'Bundle optimization, tree shaking, code splitting, and sub-second dev server speeds.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Full Stack Developer',
    company: 'Apex Digital Studio',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Spearheaded full-stack web applications for global clients using React 19 and Node.js microservices. Improved average page load times by 42% and architected scalable REST and WebSocket systems.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    achievements: [
      'Delivered 14+ client applications with zero production downtime',
      'Created custom reusable React UI component library used across 6 projects',
      'Configured high-throughput Node.js streaming APIs reducing data latency by 35%'
    ]
  },
  {
    id: 'exp-2',
    role: 'Frontend & UI/UX Developer',
    company: 'Nova Interactive',
    location: 'Hybrid',
    period: '2021 - 2023',
    description: 'Transformed Figma wireframes and design systems into pixel-perfect responsive web applications. Integrated real-time client state management and interactive animations.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Node.js', 'REST APIs'],
    achievements: [
      'Converted 30+ complex Figma mockups into fully accessible React applications',
      'Achieved average 95+ Google Lighthouse scores across all client builds',
      'Collaborated directly with founders and product owners on design iterations'
    ]
  },
  {
    id: 'exp-3',
    role: 'Junior Web Developer',
    company: 'CodeForge Labs',
    location: 'Onsite',
    period: '2020 - 2021',
    description: 'Built dynamic frontend modules and backend API integrations. Collaborated on code reviews, database migrations, and testing automation.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'MongoDB'],
    achievements: [
      'Developed 20+ responsive web pages and landing pages',
      'Engineered backend CRUD services using Express.js and MongoDB'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Angelina Jolie',
    role: 'Business Owner',
    company: 'Lumiere Brands',
    avatar: '/src/assets/images/avatar_angelina_1790334694917.jpg',
    quote: 'Working with Sammy was so good, he\'s so professional and would work with him again.',
    rating: 5,
    highlighted: true
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'CTO & Co-Founder',
    company: 'PulseCloud Technologies',
    avatar: '',
    quote: 'Sammy translated our complex backend architecture into a blazing-fast React interface with clean Node.js APIs. Exceptional craftsmanship and communication.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Sophia Chen',
    role: 'Product Lead',
    company: 'Veritas Digital',
    avatar: '',
    quote: 'From Figma designs to full-stack code, Sammy handled everything seamlessly. Our conversion rates increased by 28% after the launch.',
    rating: 5
  }
];
