import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws, SiTypescript, SiJavascript, SiDocker, SiSpring } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Développement backend et batchs métiers</>,
  },
  {
    slug: "Spring",
    Component: SiSpring,
    title: "Spring",
    Description: () => <>API sécurisées et services robustes</>,
  },
  {
    slug: "typescript",
    Component: SiTypescript,
    title: "Typescript",
    Description: () => <>Applications front-end modernes</>,
  },
  {
    slug: "javascript",
    Component: SiJavascript,
    title: "Javascript",
    Description: () => <>Interfaces dynamiques et interactives</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Structure de pages web responsives</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Design et animations web</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Gestion et interrogation de données</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Gestion de version et collaboration</>,
  },
  {
    slug: "docker",
    Component: SiDocker,
    title: "Docker",
    Description: () => <>Déploiement d’applications en conteneurs</>,
  },
];

