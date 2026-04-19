export type Experience = {
  company: string
  companyUrl?: string
  position: string
  location: string
  period: string
  blurb: string
  points: string[]
}

export type Education = {
  school: string
  area: string
  location: string
  period: string
}

export type Certification = {
  title: string
  date: string
}

export type Language = {
  name: string
  level: string
}

export type SkillGroup = {
  title: string
  items: { name: string; icon?: string; color?: string }[]
}

export const summary = {
  heading: "Fullstack engineer with a frontend heart.",
  paragraphs: [
    "I build web apps that people actually like using. Five years in, mostly shipping large frontends in TypeScript and React, with enough backend work to keep the whole thing honest.",
    "I care about clean code, tight UI, and apps that feel fast. I enjoy shaping design systems, reviewing code with teammates, and turning fuzzy product ideas into something concrete.",
  ],
}

export const experience: Experience[] = [
  {
    company: "Naseej",
    companyUrl: "https://naseej.com/",
    position: "Senior Frontend Engineer",
    location: "Remote",
    period: "Aug 2022 – Present",
    blurb:
      "Naseej builds digital products for learning and knowledge management across the Middle East.",
    points: [
      "Lead the frontend team on a platform for institutional effectiveness, now used by 10+ universities across the region.",
      "Built a custom UI component library on top of shadcn, TypeScript and Tailwind, keeping the product pixel-consistent and responsive end to end.",
      "Shipped and maintained five core product modules, adapting them as business needs shifted.",
      "Integrated LLMs and MCP servers into our day-to-day workflow, which made the team noticeably faster.",
      "Run code reviews with the team to keep things clean, scalable and maintainable.",
      "Work closely with QA to catch issues early and keep releases stable.",
    ],
  },
  {
    company: "Emploitic",
    companyUrl: "https://emploitic.com",
    position: "Software Engineer",
    location: "Algiers, Algeria",
    period: "Oct 2021 – Jul 2022",
    blurb:
      "Emploitic is Algeria's largest job platform, with 1.5M+ candidates and 10k+ employers.",
    points: [
      "Helped migrate the candidate side of the platform from a Joomla CMS to a modern microservices stack.",
      "Built UI with Next.js, MUI and TypeScript alongside the frontend team.",
      "Took part in code reviews and pushed for clean code and consistent team standards.",
      "Wrote unit and integration tests with Jest and React Testing Library, and end-to-end tests with Cypress.",
    ],
  },
  {
    company: "Freelance",
    position: "Software Engineer",
    location: "Remote",
    period: "Aug 2021 – Jan 2022",
    blurb:
      "Short-term contract work on an IoT and live-streaming management platform.",
    points: [
      "Built backend services with Python, Django and Django REST Framework.",
      "Wrote geospatial queries using GeoDjango and PostGIS for location-based features.",
      "Integrated object detection, segmentation and extraction with YOLOv3 and OpenCV.",
      "Documented and tested API endpoints with Swagger and Postman.",
    ],
  },
  {
    company: "Emploitic",
    companyUrl: "https://emploitic.com",
    position: "Intern Software Engineer",
    location: "Algiers, Algeria",
    period: "Sep 2020 – Sep 2021",
    blurb:
      "Graduation project with Emploitic: a career path recommendation system.",
    points: [
      "Worked with a project partner and the internal team to build a recommendation engine for candidates.",
      "Researched industry trends and state-of-the-art approaches for personalized career paths.",
      "Used Python, NLTK, SpaCy, Pandas and NumPy for data cleaning and processing.",
      "Built the recommendation engine with Python, Django and React, using skills, experience and interests as signals.",
    ],
  },
]

export const education: Education[] = [
  {
    school: "Ecole Supérieure d'Informatique",
    area: "MSc in Software Engineering",
    location: "Algiers, Algeria",
    period: "2016 – 2021",
  },
]

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    date: "June 2024",
  },
]

export const languages: Language[] = [
  { name: "English", level: "C1" },
  { name: "German", level: "A2" },
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
]

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: "simple-icons:typescript", color: "#3178C6" },
      { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
      { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
      { name: "HTML & CSS", icon: "simple-icons:html5", color: "#E34F26" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
      { name: "Next.js", icon: "simple-icons:nextdotjs", color: "#111111" },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
        color: "#06B6D4",
      },
      { name: "Shadcn", icon: "simple-icons:shadcnui", color: "#111111" },
      { name: "Ant Design", icon: "simple-icons:antdesign", color: "#0170FE" },
      { name: "MUI", icon: "simple-icons:mui", color: "#007FFF" },
      { name: "Redux", icon: "simple-icons:redux", color: "#764ABC" },
      {
        name: "React Router",
        icon: "simple-icons:reactrouter",
        color: "#CA4245",
      },
      {
        name: "React Hook Form",
        icon: "simple-icons:reacthookform",
        color: "#EC5990",
      },
      {
        name: "TanStack Query",
        icon: "simple-icons:reactquery",
        color: "#FF4154",
      },
      { name: "Chart.js", icon: "simple-icons:chartdotjs", color: "#FF6384" },
      { name: "Storybook", icon: "simple-icons:storybook", color: "#FF4785" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#5FA04E" },
      { name: "Express", icon: "simple-icons:express", color: "#111111" },
      { name: "Prisma", icon: "simple-icons:prisma", color: "#2D3748" },
      { name: "Django", icon: "simple-icons:django", color: "#0C4B33" },
      { name: "FastAPI", icon: "simple-icons:fastapi", color: "#009688" },
    ],
  },
  {
    title: "Testing & Tooling",
    items: [
      { name: "Jest", icon: "simple-icons:jest", color: "#C21325" },
      { name: "Vitest", icon: "simple-icons:vitest", color: "#6E9F18" },
      { name: "Cypress", icon: "simple-icons:cypress", color: "#17202C" },
      { name: "Git", icon: "simple-icons:git", color: "#F05032" },
      { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
    ],
  },
]
