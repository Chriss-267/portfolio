

type AboutProps = {
  theme:boolean,
  fecha:string,
  titulo: string,
  descripcion : string
}

function About({theme, fecha, titulo, descripcion}:AboutProps) {
  return (
    <>
      <li className="relative flex gap-6 pb-5 ">

        <div className={`before:absolute before:left-[5.5px] before:h-full before:w-[1px] ${theme ? "before:bg-white" : "before:bg-black"} `}>
          <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
            <circle r="6" cx="6" cy="6" fill={`${theme ? "white" : "black"}`} />
          </svg>
        </div>
        <div>
          <p className={`${theme ? "text-amber-200" : "text-blue-800"} `}>{fecha}</p>
          <h3 className={`${theme ? "text-amber-300" : "text-indigo-950"} font-bold text-xl`}>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
      </li>
    </>
  )
}

export default About