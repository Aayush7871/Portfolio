export const links = {
  github: 'https://github.com/Aayush7871',
  linkedin: 'https://www.linkedin.com/in/aayush-raj-819691298/',
  email: 'mailto:aayushraj2378@gmail.com',
  resume: 'Aayush-Raj-Resume.pdf',
} as const

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'C++', 'Java', 'SQL'] },
  { title: 'Backend', skills: ['FastAPI', 'Flask', 'REST APIs'] },
  { title: 'Libraries', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
  { title: 'Databases', skills: ['MongoDB', 'MySQL'] },
  { title: 'Fundamentals', skills: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'] },
  { title: 'Tools & Cloud', skills: ['Git', 'GitHub', 'Docker', 'Swagger/OpenAPI', 'AWS EC2', 'AWS S3', 'CI/CD Fundamentals'] },
] as const

export type Project = {
  title: string
  eyebrow: string
  description: string
  tags: string[]
  features: string[]
  sourceUrl: string
  demoUrl?: string
  preview: 'weather' | 'attendance'
}

export const projects: Project[] = [
  {
    title: 'Weather Web Application',
    eyebrow: 'Full-stack weather experience',
    description: 'Interactive full-stack weather application built with Flask and the OpenWeatherMap API to provide real-time weather information and 5-day forecasts.',
    tags: ['Flask', 'Python', 'REST API', 'OpenWeatherMap', 'Swagger/OpenAPI'],
    features: ['Real-time weather data', '5-day forecast', 'Geolocation search', 'Celsius / Fahrenheit conversion', 'RESTful APIs'],
    sourceUrl: 'https://github.com/Aayush7871/OpenWeatherMap-dashboard',
    preview: 'weather',
  },
  {
    title: 'SmartAttend',
    eyebrow: 'Attendance, streamlined',
    description: 'AI-powered face recognition attendance management system designed to automate student attendance while providing secure administration and reporting.',
    tags: ['Python', 'Flask', 'OpenCV', 'MongoDB Atlas', 'JavaScript'],
    features: ['Admin authentication', 'Facial enrolment', 'Automated attendance', 'Duplicate prevention', 'CSV / Excel reporting'],
    sourceUrl: 'https://github.com/Aayush7871/SMART-ATTENDENCE',
    demoUrl: 'https://smart-attendence-fs9b.onrender.com/',
    preview: 'attendance',
  },
]

export const focusAreas = [
  'Backend Engineering',
  'REST API Development',
  'Data Structures & Algorithms',
  'Database Systems',
  'Cloud & Deployment',
  'Software Engineering',
] as const
