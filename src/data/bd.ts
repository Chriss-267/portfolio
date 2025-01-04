export type Project = {
    id:number,
    link: string,
    img:string,
    titulo:string,
    description: string,
    useTec : string[],
    github : string
}

export const projects: Project[] = [
    {
      id: 1,
      link: "https://devstagram-chriss267.sgp.dom.my.id/",
      img: "proyecto-1",
      titulo: "Devstagram",
      description: "A web application inspired by Instagram that allows users to post photos, follow others, explore content, and connect through likes and comments.",
      useTec: ["Laravel", "Php", "Tailwind"],
      github : "https://github.com/Chriss-267/devstagram"
    },
    {
      id: 2,
      link: "https://contador-caloriass-react.netlify.app/",
      img: "proyecto-2",
      titulo: "Calorie Tracker",
      description: "An app to log food and exercise, calculate caloric intake, and manage entries with useReducer.",
      useTec: ["React", "TypeScript", "Tailwind"],
      github : "https://github.com/Chriss-267/Contador-calorias"
    },
    {
      id: 3,
      link: "https://672eb9ab45d9fc88a34650b7--las-cryptomonedas.netlify.app/",
      img: "proyecto-3",
      titulo: "Crypto App",
      description: "An app for cryptocurrency quotes that displays the highest price, lowest price, and last update, using data from an API with validation via Zod and state management with Zustand.",
      useTec: ["React", "TypeScript", "Css"],
      github : "https://github.com/Chriss-267/cyptomonedas"

    },
    {
      id: 4,
      link: "https://buscador-imagens.netlify.app/",
      img: "proyecto-4",
      titulo: "Image Search",
      description: "Search for images using the Pixabay API, with pagination for browsing results.",
      useTec: ["JavaScript", "Css", "Html"],
      github : "xd"

    },
    {
      id: 5,
      link: "https://consultar-clima-hoy.netlify.app/",
      img: "proyecto-5",
      titulo: "Weather Finder",
      description: "Get real-time weather information by searching for locations, with current conditions and forecasts.",
      useTec: ["React", "TypeScript", "Css"],
      github : "https://github.com/Chriss-267/consultar-clima"
    },
  ];
  
