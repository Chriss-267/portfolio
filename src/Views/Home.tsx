import About from "../components/About"
import Projects from "../components/Projects"
import { usePortfolio } from "../Hooks/usePortfolio"


export default function Home() {

  const {theme} = usePortfolio()


  return (

    
    
    <div className={`pt-32 md:pt-8 w-full md:mt-0 ${theme ? "text-white" : "text-black"}`}>


    <main className="mb-28 md:mb-0">
          <section className="ml-5 md:h-[90vh] lg:h-[80vh] flex flex-col lg:flex-row justify-center gap-10 items-center ">

          <section className="mt-10">
              <section className={`w-80 h-80 mx-auto rounded-full relative ${theme ? "bg-slate-800 shadow-[0px_10px_20px_white]" : "bg-sky-100 shadow-[0px_10px_20px_black]"}  `}>
                <img src="../boywithuke.png" alt="imagen boywhithuke" className="max-w-72 absolute -right-2 -top-12"  loading="lazy" />
              </section>
            </section>

            <section className="max-w-lg text-left">
              <h1 className="text-4xl font-bold mb-5">Just a Developer</h1>

              <p className="mb-10">Hi! I'm Christian, a Systems Engineering student passionate about software development. 
                I enjoy creating user-friendly interfaces and transforming ideas into interactive, efficient products.</p>

              <div className="text-center lg:text-left">
                <a className={`p-2 rounded-md ${theme ? "bg-white text-black hover:shadow-[0_1px_12px_white] " : "bg-black text-white hover:shadow-[0_1px_12px_black] "} `}
                href="/cv.pdf"
                download="CV-Christian-Monterrosa.pdf"
                ><i className="fa-solid fa-cloud-arrow-down"></i> {" "} Download CV
                </a>
              </div>

            </section>

            

          </section>


          </main>

          <section id="projects">
            
            <Projects 
            
            />
          </section>


         
            <About/>


        
    </div>
  )
}
