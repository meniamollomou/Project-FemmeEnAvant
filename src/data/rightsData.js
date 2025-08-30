// src/data/rightsData.js
import { Book, Vote, GraduationCap, Home, Megaphone, Shield } from "lucide-react";

export const rightsData = [
  {
    id: "marriage",
    title: "Droits relatifs au mariage",
    description:
      "Informez-vous sur l’âge légal du mariage, le consentement et l’égalité dans le mariage.",
    details: `En Guinée, le mariage doit respecter certaines conditions légales : l’âge minimum requis,
    le consentement mutuel et l’égalité des époux devant la loi. Les mariages forcés ou précoces
    sont interdits et sanctionnés par la loi.`,
    icon: Book,
  },
  {
    id: "education",
    title: "Droit à l’éducation",
    description:
      "Comprenez votre droit d’accéder à une éducation gratuite et de qualité.",
    details: `Chaque enfant a droit à une éducation gratuite et de qualité. Les États doivent garantir 
    l'accès équitable à l’école primaire et encourager la poursuite des études secondaires et supérieures.`,
    icon: GraduationCap,
  },
  {
    id: "vote",
    title: "Droits de vote",
    description:
      "Découvrez qui peut voter, comment s’inscrire et pourquoi votre vote compte.",
    details: `Tout citoyen majeur a le droit de voter et de se présenter aux élections. 
    Le vote est un acte citoyen essentiel pour influencer la gouvernance et faire entendre sa voix.`,
    icon: Vote,
  },
  {
    id: "property",
    title: "Droits fonciers",
    description:
      "Connaissez vos droits concernant la propriété foncière, l’héritage et le logement.",
    details: `Les droits fonciers garantissent la sécurité des terres, l’héritage équitable et 
    l’accès à un logement décent. Les femmes et les hommes doivent être traités de manière égale dans la succession.`,
    icon: Home,
  },
  {
    id: "expression",
    title: "Liberté d’expression",
    description:
      "Le droit d’exprimer mes idées, mes émotions et mes opinions librement, avec respect.",
    details: `Chaque citoyen a le droit de s’exprimer librement, tant que cela ne porte pas atteinte 
    aux droits d’autrui. La liberté d’expression favorise la démocratie et la participation active.`,
    icon: Megaphone,
  },
  {
    id: "violence",
    title: "Protection contre la violence",
    description:
      "Informez-vous sur les lois contre la violence domestique, le harcèlement et les abus.",
    details: `La loi protège contre toutes formes de violence domestique, harcèlement et abus. 
    Les victimes ont droit à une assistance et à une protection juridique.`,
    icon: Shield,
  },
];
