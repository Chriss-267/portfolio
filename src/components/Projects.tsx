import  { useState} from 'react'
import { Project, projects } from '../data/bd'
import { usePortfolio } from '../Hooks/usePortfolio';



function Projects() {


    const {theme, handleClickModal,handleSetProject} = usePortfolio()

 

    const  [projectss] = useState<Project[]>(projects)
    
    


  return (
    <div className={`${theme ? "text-white" : "text-black"} pt-20`}>
      <h1 className="text-3xl font-bold text-center ">{`</>What I've Done`}</h1>
      <div className=" px-2 m-10 grid grid-cols-1 md:grid-cols-3 lg:grid-col-4 gap-2">
      
      {projectss.map(projectt =>(
        <section  key={projectt.id} className={`${theme  ? "bg-neutral-900 hover:bg-neutral-950 group" : "bg-gray-300 hover:bg-white group"} px-4 pt-6 rounded-lg  `}>

          <a href={projectt.link} target='_blank'>

            <img src={`${projectt.img}.png`} alt="project" className=' w-auto rounded-lg' loading="lazy" />
          </a>
        
            {/**seccion titulo icono github y deploy */}

            <section className={`${theme ? "bg-neutral-800 group-hover:bg-neutral-900" : "bg-gray-200 group-hover:bg-gray-100"} my-4 p-4 rounded-lg  space-y-4`}>
              <section className='flex items-center gap-2'>
                  <a href={projectt.github} target='_blank'> <img  src={theme ? "/skills/githubWhite.svg" : "/skills/githubBlack.svg"} alt="github" className='w-[5vw] md:w-[2vw]'/></a>
                  <h2 className='text-center text-xl font-bold'>{projectt.titulo}</h2>
                  
                </section>

                <section className={`flex justify-between text-sm ${theme ? "text-gray-300" : "text-gray-700"}`}>
                  <button type='button' onClick={() => {handleClickModal(),
                                                   handleSetProject(projectt)
                                                }}
                  >Information</button>
                  <a href= {projectt.link} target='_blank' className='flex gap-1 '>Deploy
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>

                  </a>
                </section>

            </section>
              
              
              
          
          

              
      

            
       
 
          
        </section>
      ))}
  </div>
</div>
   
  )
}

export default Projects