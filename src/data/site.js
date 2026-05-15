// Single source of truth for resume content.
// Edit this file to update the site.

function calculateExperience(startDate) {

    const start = new Date(startDate);
    const end = new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearText = years === 1 ? 'year' : 'years';
    const monthText = months === 1 ? 'month' : 'months';

    return `${years} ${yearText} ${months} ${monthText}`;
}

function calculateExperience1(startDate) {

    const start = new Date(startDate);
    const end = new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearText = years === 1 ? 'year' : 'years';
    const monthText = months === 1 ? 'month' : 'months';

    return `${years}.${months}`;
}

export const site = {
  name: 'Vinayagam S',
  initials: 'VS',
  role: 'Full Stack Software Developer',
  tagline: 'MERN & MEAN Stack · React Native',
  experienceLength: calculateExperience('2021-11-01'),
  location: 'India',
  status: 'Open to work',
  email: 'vinayagamss9976@gmail.com',
  phone: '+91 78250 39287',
  linkedin: 'https://www.linkedin.com/in/vinayagam-s-902930284',
  linkedinLabel: 'linkedin.com/in/vinayagam s',

  summary:
    'Results-driven Full Stack Developer with nearly four years of experience designing and shipping scalable web and mobile applications. I build performant front-end interfaces, architect REST APIs, and deploy cloud-hosted solutions on AWS — always with a bias toward clean code and exceptional user experiences.',

  // Stats shown beneath the hero
  stats: [
    { value: calculateExperience1('2021-11-01'), unit: 'years', label: 'Building products' },
    { value: '15+', unit: '', label: 'Projects shipped' },
    { value: '11+', unit: '', label: 'Stacks mastered (MERN & MEAN)' },
    { value: '100%', unit: '', label: 'Cloud deployed on AWS' },
  ],

  stack: [
    {
      group: 'Frontend',
      items: ['React.js', 'Angular', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3', 'JavaScript (ES6+)'],
    },
    {
      group: 'Backend & Database',
      items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    },
    {
      group: 'Cloud & DevOps',
      items: ['AWS', 'Web App Hosting', 'SEO Optimization', 'Agile / Scrum'],
    },
  ],

  experience: [
    {
      company: 'Arrow Throught',
      role: 'Full Stack Software Developer',
      location: 'Chennai, India',
      period: 'Nov 2021 — Present',
      current: true,
      bullets: [
        'Designed and shipped end-to-end web applications using React.js, Angular, and Next.js — focused on performant, responsive UI.',
        'Built cross-platform mobile applications with React Native, sharing business logic across iOS and Android to cut time-to-market.',
        'Architected RESTful backend services with Node.js and Express, integrated with MongoDB for scalable data storage.',
        'Deployed and managed applications on AWS cloud infrastructure with high availability, security, and performance baked in.',
        'Implemented SEO best practices that improved search rankings and grew organic traffic for client projects.',
        'Collaborated in Agile sprints, ran code reviews, and maintained clean, well-documented codebases.',
        'Delivered thecloud9kitchens.com — a full-featured restaurant web application — within a 2-month timeline.',
      ],
    },
  ],

  projects: [
  {
    title: 'PMS - Employee Management System',
    tag: 'Enterprise Management Application',
    description:
      'Developed a comprehensive employee management system with attendance tracking, employee performance monitoring, real-time chat functionality, and customizable Google Sheets–like tables capable of handling more than 2 lakh records efficiently. Also managed server deployment, cloud hosting, and maintenance.',
    stack: [
      'Angular',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'AWS',
      'MEAN Stack'
    ],
    url:null,
    year: '2023',
  },

  {
    title: 'kiranaabazaar.com',
    tag: 'E-Commerce Platform',
    description:
      'Built a scalable e-commerce application supporting grocery ordering, vendor management, order tracking, secure payments, and responsive user experience for both B2B and B2C customers.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS',
      'Tailwind CSS',
      'MERN Stack'
    ],
    url: 'https://kiranaabazaar.com',
    year: '2024',
  },

  {
    title: 'liarafashions.com',
    tag: 'Fashion E-Commerce Platform',
    description:
      'Developed a responsive fashion e-commerce platform with product management, order processing, secure checkout, customer management, and mobile-friendly UI.',
    stack: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'AWS',
      'Tailwind CSS',
      'MERN Stack'
    ],
    url: 'https://liarafashions.com',
    year: '2024',
  },

  {
    title: 'shadesorder.com',
    tag: 'B2B Online Ordering Platform',
    description:
      'Created an online ordering and management system with dynamic product handling, payment integration, admin dashboard, and optimized customer ordering workflow.',
    stack: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'AWS',
      'Tailwind CSS'
    ],
    url: 'https://shadesorder.com',
    year: '2024',
  },

  {
    title: 'natomasgroup.org',
    tag: 'Event Management System',
    description:
      'Built an event management platform with participant registration, score tracking, scheduling, and administrative controls for managing competitions and events efficiently.',
    stack: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'MERN Stack'
    ],
    url: 'https://natomasgroup.org',
    year: '2024',
  },

  {
    title: 'hiring.arrowthought.in',
    tag: 'Interview & Aptitude Evaluation Platform',
    description:
      'Developed an online aptitude testing and interview evaluation platform with automated score calculation, candidate performance analysis, secure test handling, and reporting features.',
    stack: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'Tailwind CSS',
      'AWS'
    ],
    url: 'https://hiring.arrowthought.in',
    year: '2025',
  },

  {
    title: 'valluvas.com',
    tag: 'Education Management System',
    description:
      'Designed and developed an education ERP system for student admissions, fee management, syllabus distribution, student data maintenance, and centralized administration.',
    stack: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'MERN Stack'
    ],
    url: 'https://valluvas.com',
    year: '2024',
  },

  {
    title: 'kavinsacademy.com',
    tag: 'Academic Management Platform',
    description:
      'Developed a student and academic management platform with admission workflows, fee tracking, syllabus sharing, and role-based administrative management.',
    stack: [
      'React.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Tailwind CSS'
    ],
    url: 'https://kavinsacademy.com',
    year: '2024',
  },

  {
    title: 'Multi-Purpose Billing Software',
    tag: 'Billing & Inventory Management Application',
    description:
      'Built a Windows and Android-based billing software with purchase and sales tracking, vendor management, profit/loss analytics, customizable GST billing, and inventory handling for multiple business types.',
    stack: [
      'Electron.js',
      'Android',
      'Node.js',
      'MongoDB',
      'SQLite',
      'Express.js'
    ],
    url: null,
    year: '2023',
  },
],

  education: [
    {
      degree: 'B.Tech — Computer Science & Engineering',
      school: 'Anna University',
      year: '2021',
      grade: '74%',
    },
  ],
}
