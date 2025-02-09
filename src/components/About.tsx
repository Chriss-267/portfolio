import { usePortfolio } from "../Hooks/usePortfolio"
import Skills from "./Skills"


function About() {

  const {theme, aboutData} = usePortfolio()

  return (
    <div className={`${theme ? "text-white" : "text-black"} pt-20`}>

          <section className="w-[80vw] lg:w-[60vw] mx-auto mt-10" id="about">
            <h2 className="text-3xl font-bold text-center mb-10">About me</h2>

            <section className="flex flex-col md:flex-row justify-center items-center gap-10">

          
                <img src="me.jpg" alt="Christian Monterrosa" className="w-52 h-52 rounded-full"loading="lazy"  />
          

              <section className="flex justify-center " >
                <ul>
                {aboutData.map((item, index) => (
                  <li key={index} className="relative flex gap-6 pb-5">
                    <div
                      className={`before:absolute before:left-[5.5px] before:h-full before:w-[1px] ${
                        theme ? "before:bg-white" : "before:bg-black"
                      }`}
                    >
                      <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                        <circle r="6" cx="6" cy="6" fill={theme ? "white" : "black"} />
                      </svg>
                    </div>
                    <div>
                      <p className={theme ? "text-amber-200" : "text-blue-800"}>{item.fecha}</p>
                      <h3 className={`${theme ? "text-amber-300" : "text-indigo-950"} font-bold text-xl`}>
                        {item.titulo}
                      </h3>
                      <p>{item.descripcion}</p>
                    </div>
                  </li>
                ))}
                
                </ul>
              </section>

            </section>
          </section>
    
          <Skills/>
      

    

      
    </div>
  )
}

export default About