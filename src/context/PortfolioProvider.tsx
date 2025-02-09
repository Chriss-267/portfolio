import { createContext, ReactNode, useState, useEffect } from "react";
import { Project } from "../data/bd";

type PortfolioProviderProps = {
    children : ReactNode
}

type PortfolioContextProps = {
    aboutData: {
        fecha: string;
        titulo: string;
        descripcion: string;
      }[],
   theme : boolean,
   modal: boolean,
   project: Project,
   handleSetProject: (project : Project)  => void,
   changeTheme : () => void,
   handleClickModal : () => void
}

const PortfolioContext = createContext <PortfolioContextProps>({} as PortfolioContextProps);

const PortfolioProvider = ({children} : PortfolioProviderProps) => {


    //About data

    const aboutData = [
        {
          fecha: "Universidad Pedagógica de El Salvador 2023-2027 (Proceso)",
          titulo: "Ingeniería en Sistemas y Computación",
          descripcion:
            "Design and implementation of projects using programming techniques, construction of secure network infrastructure models, and auditing of information systems within organizations.",
        },
        {
          fecha: "Kodigo 2024-2025 (Proceso)",
          titulo: "FullStack Jr",
          descripcion:
            "Web development: proficient in frontend technologies like JavaScript and React for building interactive interfaces, and backend technologies like PHP, Laravel, and MySQL for developing applications and managing databases.",
        },
      ];

    

      //modal

      const [modal, setModal] = useState(false)

      const handleClickModal = () =>{
        setModal(!modal)
      }


      //set Project

      const [project, setProject] = useState<Project>({} as Project)

      const handleSetProject = (project : Project) =>{

        setProject(project)
      }


      //theme 

      const themeLocalStorage = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme") as string) : true;
    
      const [theme, setTheme] = useState(themeLocalStorage);
    
      useEffect(() =>{
            localStorage.setItem("theme", JSON.stringify(theme))
      }, [theme])

      const changeTheme = () => {
        
          setTheme(!theme)

      }

    return (
        <PortfolioContext.Provider
            value={{
                aboutData,
                modal,
                handleClickModal,
                theme,
                changeTheme,
                project,
                handleSetProject

            }}
        
        >{children}</PortfolioContext.Provider>
    )
}

export {
    PortfolioProvider
}

export default PortfolioContext