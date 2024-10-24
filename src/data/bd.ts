export type Project = {
    id:number,
    link: string,
    img:string,
    titulo:string,
    description: string,
    useTec : string[]
}

export const projects: Project[] = [
    {
      id: 1,
      link: "https://contador-caloriass-react.netlify.app/",
      img: "proyecto-1",
      titulo: "Calorie Tracker",
      description: "An app to log food and exercise, calculate caloric intake, and manage entries with useReducer.",
      useTec: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: 2,
      link: "https://contador-de-propinas.netlify.app/",
      img: "proyecto-2",
      titulo: "Tip Calculator",
      description: "Users can add dishes, specify tips, and calculate totals automatically using useReducer.",
      useTec: ["React", "TypeScript", "Tailwind"],
    },
    {
      id: 3,
      link: "https://buscador-imagens.netlify.app/",
      img: "proyecto-3",
      titulo: "Image Search",
      description: "Search for images using the Pixabay API, with pagination for browsing results.",
      useTec: ["JavaScript", "Css", "Html"],
    },
    {
      id: 4,
      link: "https://el-clima-hoy.netlify.app/",
      img: "proyecto-4",
      titulo: "Weather Finder",
      description: "Get real-time weather information by searching for locations, with current conditions and forecasts.",
      useTec: ["JavaScript", "Css", "Html"],
    },
  ];
  
