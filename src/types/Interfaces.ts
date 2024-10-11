// Definir una interfaz para los proyectos
export interface IProject {
    id: number;
    title: string;
    image: string;
    url: string;
    description?: string;
    descriptionUno?: string;
    descriptionDos?: string;
    descriptionTres?: string;
  }