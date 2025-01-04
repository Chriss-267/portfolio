import  { useState , useEffect} from 'react'
import { Project, projects } from '../data/bd'

type ProjectsProps = {
  theme:boolean
}

function Projects({theme}:ProjectsProps) {

     const favoriteStorage:Project[] = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites') as string) : [];

    const  [projectss] = useState<Project[]>(projects)
    const [favorite, setFavorite] = useState<Project[]>(favoriteStorage)

    

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorite))
    }, [favorite])

    
    
     
      
     

    const addFavorite = (item:Project) =>{
          const itemExists = favorite.find(project => project.id === item.id);

          if(itemExists){
            const updateFavorite = favorite.filter(project => project.id !== item.id);
            setFavorite(updateFavorite)
            
          }else{
            
            const newItem = item;
            setFavorite([...favorite, newItem])
            
          }
      
          
          
    }

    const isFavorite = (item: Project) => {
      return favorite.some(project => project.id === item.id);
    };
    

    


  return (
    <div>
        {projectss.map(projectt =>(
          <section  key={projectt.id} className='w-[90vw] lg:w-[70vw] mx-auto mt-5'>
            <section className='md:flex justify-between gap-8 items-center'>
              <section>
                <section className='flex justify-center'>
                <a href= {projectt.link} target='_blank'>
                    <img src={`${projectt.img}.png`} alt="project" className='mt-5 max-w-xs md:max-w-md border-y-orange-400 border-x-violet-700 border-2 hover:shadow-[0px_0px_50px_rgba(138,43,226,0.5)]' loading="lazy" />

                </a>
                  
                </section>
              
              <section className='flex items-center justify-between'>
                <section className='flex items-center'>
                  <a href={projectt.github} target='_blank'> <img  src={theme ? "/public/skills/githubWhite.svg" : "/public/skills/githubBlack.svg"} alt="github" className='w-[5vw] md:w-[2vw]'/></a>
                  <h2 className='text-center p-3 font-bold'>{projectt.titulo}</h2>
                </section>
                
                <i className={`fa-solid fa-heart   ${isFavorite(projectt) ? "text-red-500" : "text-gray-200"} cursor-pointer`}
                 onClick={()=> addFavorite(projectt)}
                
                ></i>
                </section>
                
                <section className='flex justify-center gap-8'>
                   <i className="fa-solid fa-backward fa-2x"></i>
                  <i className="fa-solid fa-circle-pause fa-2x"></i>
                  <i className="fa-solid fa-forward fa-2x"></i>
                </section>
              </section>
              
              <section >
                <p className='mt-5 text-xs mb-3 md:text-sm'>{projectt.description}</p>
                <section className='flex justify-evenly flex-wrap md:gap-2'>
                {projectt.useTec.map(tec =>(
                  <button translate="no" className="bg-indigo-950  px-3  py-1 w-28  rounded-lg flex justify-center items-center gap-1 mb-4">
                    <img className='w-4 mr-1' src={`/usedTec/${tec}.svg`} alt="" />
                    <p className='text-white text-sm'>{tec}</p>
                  </button>
                ))}
              </section>
                
              </section>

              
                
             
            </section>
            </section>
        ))}
    </div>
  )
}

export default Projects