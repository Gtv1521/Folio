import { LinkProps } from "react-router-dom";

// Definir una interfaz para los proyectos
export interface IProject {
    id: number;
    title: string;
    image: string;
    url: string;
    git: string,
    description?: string;
    descriptionUno?: string;
    descriptionDos?: string;
    descriptionTres?: string;
    tecnologias?: string[]
  }