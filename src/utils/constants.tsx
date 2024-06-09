export const MENU_LINKS = [
  {
    title: "</>",
    link: "#hero-section",
    color: "text-secondary",
  },
  {
    title: "/about",
    link: "#about",
    color: "text-white",
  },
  {
    title: "/experience",
    link: "#experience",
    color: "text-white",
  },
  {
    title: "/contact",
    link: "#contact",
    color: "text-white",
  },
];

export const RED_WORDS: Record<string, string> = {
  technical: "technical",
  support: "support",
  design: "design",
  develop: "develop",
  efficient: "efficient",
  solutions: "solutions",
  DRY: "DRY",
  SOLID: "SOLID",
  Led: "Led",
  NHS: "NHS",
  international: "international",
  team: "team",
  Jira: "Jira",
  Confluence: "Confluence",
};

export const EXPERIENCES = [
  {
    role: "Full-Stack Engineer",
    company: "Nanolabs Electronics",
    period: "(2023-present)",
    points: [
      "- Designing, planning, and breaking down new features.",
      "- Providing technical support to new team members.",
      "- Enhanced project development time by reconstructing the communication between parts of our system.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Webom Creative Development",
    period: "(2022-2023)",
    points: [
      "- Applied logical thinking to design and develop efficient solutions for our clients.",
      "- Improved the codebase of four full-stack projects by adhering to clean code principles like DRY and  SOLID.",
      "- Led the frontend development for a React-Native application in collaboration with the NHS.",
    ],
  },
  {
    company: "Electronic Arts",
    role: "QA Tester",
    period: "(2021-2022)",
    points: [
      "- Developed excellent communication skills through collaboration with an international team",
      "- Identified and reported over 200 core-tech issues using Jira and Confluence",
      "- Provided guidance to new team members during onboarding processes",
    ],
  },
];

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const COMPONENTS = {
  BUTTON: {
    PADDING: {
      small: "px-2 py-1",
      medium: "px-4 py-2",
      large: "px-6 py-3",
    },
    COLORS: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
      success: "bg-success text-white",
      "gradient-1": "bg-gradient-to-b from-black to-medium-grey text-white",
      "gradient-2": "bg-gradient-to-t from-black to-medium-grey text-white",
      "gradient-3": "bg-gradient-to-b from-black to-primary text-white",
      "gradient-4": "bg-gradient-to-t from-black to-primary text-white",
    },
  },
};

export const EXTERNAL_LINKS = {
  LINKED_IN: "https://www.linkedin.com/in/chirigutraul/",
  GITHUB: "https://github.com/chirigutraul",
};
