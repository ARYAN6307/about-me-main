import { Logo } from "@/once-ui/components";

const lifeTimeline = {
  display: true,
  title: "Life Highlights",
  milestones: [
    { year: "2010", event: "Started playing cricket in the neighborhood park." },
    { year: "2015", event: "First exposure to programming via C in school." },
    { year: "2020", event: "Joined SRM University for B.Tech in CSE." },
    { year: "2023", event: "Completed virtual internship at PwC." },
    { year: "2024", event: "Ranked in top 10% of GCP Arcade leaderboard." },
    { year: "2025", event: "Joined Cognizant as Programmer Analyst." },
  ],
};

const funFacts = {
  display: true,
  title: "Fun Facts & Hobbies",
  items: [
    "Plays badminton and cricket on weekends.",
    "Collects restaurant memories with family.",
    "Builds React apps in free time.",
    "Sci-fi movie buff — loves watching films in theatres.",
  ],
};


const person = {
  firstName: "Aryan",
  lastName: "Pandey",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Student & Developer",
  avatar: "/images/avatar.jpg",
  email: "aryan.lko04@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally share insights about my life journey, school, college, and personal projects.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aryan6307",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aryan-pandey/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Life Journey`,
  description: `A portfolio and timeline website showcasing Aryan's journey from school to present`,
  headline: <>Exploring the world, one experience at a time</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">My Life Journey</strong></>,
    href: "/work/life-journey",
  },
  subline: (
    <>
      I'm Aryan, a student and developer, exploring new technologies and building meaningful projects.
      <br /> On this website, I document my experiences, from school to family dinners and everything in between.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Programmer Analyst passionate about development and documenting his life journey.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aryan is an Engineer, role Programmer Analyst with a passion for coding and technology. His goal is to share his experiences and learnings with the world, including his journey through education, places he's lived, and memorable moments with family and friends.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "My Projects & Work",
    experiences: [
      {
        company: "Cognizant",
        timeframe: "2025 - Present",
        role: "Programmer Analyst",
        achievements: [
          <>
            Currently working on Salesforce as a part of the development team, enhancing the platform for better business automation.
          </>,
          <>
            Involved in client communication, project management, and delivering solutions based on client needs and specifications.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Salesforce Development Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PWC",
        timeframe: "2024",
        role: "Virtual Internship",
        achievements: [
          <>
            Gained expertise in DSA, Java, Python, SQL, DevOps, and Cybersecurity through hands-on projects and training.
          </>,
        ],
        images: [],
      },
      {
  company: "GCP Developer",
  timeframe: "2023 - Present",
  role: "GCP Developer",
  achievements: [
    <>
      Completed multiple modules on Google Cloud Platform (GCP) via Qwiklabs Arcade and earned prizes for outstanding performance.
    </>,
    <>
      Gained hands-on experience with various GCP tools and services, applying them in real-world scenarios.
    </>,
  ],
  images: [
    {
      src: "/images/projects/project-01/cover-01.jpg",
      alt: "GCP Development Project",
      width: 16,
      height: 9,
    },
  ],
}

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SRM Institute of Science and Technology",
        description: <>Graduated with a B.Tech in Computer Science Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Salesforce",
        description: <>Working on Salesforce development for business automation and CRM solutions.</>,
        images: [],
      },
      {
        title: "React.js",
        description: <>Building dynamic, interactive UIs with React.js and Next.js.</>,
        images: [],
      },
      {
        title: "Node.js",
        description: <>Creating backend services and APIs with Node.js and Express.</>,
        images: [],
      },
    ],
  },
   lifeTimeline, // integrated
  funFacts, 
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about my life and tech...",
  description: `Read about my experiences in coding, life, and technology`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `My Projects – ${person.name}`,
  description: `Projects created by Aryan Pandey, showcasing his skills and journey`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo Gallery – ${person.name}`,
  description: `A collection of photos from my travels, family moments, and personal experiences`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Image 1",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Image 2",
      orientation: "vertical",
    },
  ],
};




export { person, social, newsletter, home, about, blog, work, gallery, funFacts, lifeTimeline };
