
import { usePortfolio } from "../Hooks/usePortfolio"


export default function ModalProyecto() {

  const {handleClickModal, project, theme} = usePortfolio()

  

  return (
    <div>
      <div className="flex justify-end items-center">
          <button
          onClick={handleClickModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      <div className="md:flex max-w-screen-md gap-6 p-3">
      
      <div className="md:w-2/3">
        <img
          src={`../${project.img}.png`}
          alt={`Imagen proyeccto ${project.img}`}
          className="rounded-lg"
        />

        <div className="flex flex-wrap gap-2 mt-3">
          {project.useTec.map(tec => (
            <p key={tec} className={`py-1 px-2 ${theme ? "border-indigo-500 text-indigo-500 " : "border-amber-600 text-amber-600"}  border rounded-lg lowercase`}>{tec}</p>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 space-y-8">
        

        <h1 className="text-3xl font-bold text-center">{project.titulo}</h1>

        <p className="text-sm text-gray-500 mt-2">{project.description}</p>
        
        <div className="flex justify-center gap-3">
          <a className={`py-2 w-1/2 ${theme ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-400 hover:bg-amber-300 text-black"} rounded-lg  text-center`}
            href={project.link} target="_blank">Visit</a>
        
          <a className={`py-2 w-1/2 border ${theme ? "border-indigo-600 hover:bg-indigo-600" : "border-amber-400 hover:bg-amber-400 text-black"} rounded-lg text-center`}
             href={project.github} target="_blank">GitHub</a>
          
        </div>
        
        

        
      </div>
    </div>
    </div>
    
  )
}
