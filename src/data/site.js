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
    { value: '3.9', unit: 'years', label: 'Building products' },
    { value: '15+', unit: '', label: 'Projects shipped' },
    { value: '2', unit: '', label: 'Stacks mastered (MERN & MEAN)' },
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
      title: 'thecloud9kitchens.com',
      tag: 'Restaurant Web Application',
      description:
        'A full-featured restaurant website with menu management, online presence optimization, and a seamless ordering experience. Designed, built, and deployed within a tight 2-month timeline.',
      stack: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS'],
      url: 'https://thecloud9kitchens.com',
      year: '2024',
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
