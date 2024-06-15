import ReactIcon from "../assets/icons/react.svg";
import NodeIcon from "../assets/icons/nodejs.svg";
import JavascriptIcon from "../assets/icons/javascript.svg";
import TypescriptIcon from "../assets/icons/typescript.svg";
import HtmlIcon from "../assets/icons/html.svg";
import CssIcon from "../assets/icons/css.svg";
import MongodbIcon from "../assets/icons/mongodb.svg";
import PostgresqlIcon from "../assets/icons/postgresql.svg";
import GitIcon from "../assets/icons/git.svg";
import JiraIcon from "../assets/icons/jira.svg";
import ConfluenceIcon from "../assets/icons/confluence.svg";
import DockerIcon from "../assets/icons/docker.svg";
import NestIcon from "../assets/icons/nestjs.svg";
import ReduxIcon from "../assets/icons/redux.svg";
import RedisIcon from "../assets/icons/redis.svg";
import GraphqlIcon from "../assets/icons/graphql.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import AppsIcon from "../assets/icons/apps.svg";

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
    id: "NANO",
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
    id: "WEBOM",
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
    id: "EA",
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

export const ICONS = {
  GIT: GitIcon,
  JIRA: JiraIcon,
  CONFLUENCE: ConfluenceIcon,
  DOCKER: DockerIcon,
  NEST: NestIcon,
  REDUX: ReduxIcon,
  REDIS: RedisIcon,
  GRAPHQL: GraphqlIcon,
  REACT: ReactIcon,
  NODE: NodeIcon,
  JAVASCRIPT: JavascriptIcon,
  TYPESCRIPT: TypescriptIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  MONGODB: MongodbIcon,
  POSTGRESQL: PostgresqlIcon,
  LINKED_IN: LinkedIn,
  APPS: AppsIcon,
};

export const TECHNOLOGIES = {
  REACT: {
    name: "React",
    icon: ICONS.REACT,
  },
  REACT_NATIVE: {
    name: "React Native",
    icon: ICONS.REACT,
  },
  NODE: {
    name: "Node",
    icon: ICONS.NODE,
  },
  JAVASCRIPT: {
    name: "Javascript",
    icon: ICONS.JAVASCRIPT,
  },
  TYPESCRIPT: {
    name: "Typescript",
    icon: ICONS.TYPESCRIPT,
  },
  HTML: {
    name: "HTML",
    icon: ICONS.HTML,
  },
  CSS: {
    name: "CSS",
    icon: ICONS.CSS,
  },
  MONGODB: {
    name: "MongoDB",
    icon: ICONS.MONGODB,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: ICONS.POSTGRESQL,
  },
  GIT: {
    name: "Git",
    icon: ICONS.GIT,
  },
  JIRA: {
    name: "Jira",
    icon: ICONS.JIRA,
  },
  CONFLUENCE: {
    name: "Confluence",
    icon: ICONS.CONFLUENCE,
  },
  DOCKER: {
    name: "Docker",
    icon: ICONS.DOCKER,
  },
  NEST: {
    name: "Nest JS",
    icon: ICONS.NEST,
  },
  REDUX: {
    name: "Redux",
    icon: ICONS.REDUX,
  },
  REDIS: {
    name: "Redis",
    icon: ICONS.REDIS,
  },
  GRAPHQL: {
    name: "GraphQL",
    icon: ICONS.GRAPHQL,
  },
};

export const TECH_USED: { [key: string]: { name: string; icon: string }[] } = {
  NANO: [
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.CSS,
    TECHNOLOGIES.JAVASCRIPT,
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.NODE,
    TECHNOLOGIES.MONGODB,
    TECHNOLOGIES.GIT,
    TECHNOLOGIES.JIRA,
    TECHNOLOGIES.CONFLUENCE,
    TECHNOLOGIES.DOCKER,
    TECHNOLOGIES.REDIS,
  ],
  WEBOM: [
    TECHNOLOGIES.HTML,
    TECHNOLOGIES.CSS,
    TECHNOLOGIES.JAVASCRIPT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.NODE,
    TECHNOLOGIES.POSTGRESQL,
    TECHNOLOGIES.GIT,
    TECHNOLOGIES.JIRA,
    TECHNOLOGIES.CONFLUENCE,
    TECHNOLOGIES.DOCKER,
    TECHNOLOGIES.NEST,
    TECHNOLOGIES.REDUX,
    TECHNOLOGIES.REACT_NATIVE,
    TECHNOLOGIES.GRAPHQL,
  ],
  EA: [TECHNOLOGIES.JIRA, TECHNOLOGIES.CONFLUENCE],
};
