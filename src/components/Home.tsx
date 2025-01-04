import bwu from "../assets/boywithuke.png"
import Projects from "./Projects"
import About from "./About"
import Skills from "./Skills"

type HomeProps = {
  theme: boolean
}

function Home({ theme }: HomeProps) {




  return (
    <div className={`mt-8 w-full md:mt-0 ${theme ? "text-white" : "text-black"}`}>
    <main className="mb-28 md:mb-0">
      <section className="ml-5 md:h-[90vh] lg:h-[80vh] flex flex-col lg:flex-row justify-center gap-10 items-center ">

      <section className="mt-10">
          <section className={`w-80 h-80 mx-auto rounded-full relative ${theme ? "bg-slate-800 shadow-[0px_10px_20px_white]" : "bg-sky-100 shadow-[0px_10px_20px_black]"}  `}>
            <img src={bwu} alt="" className="max-w-72 absolute -right-2 -top-12"  loading="lazy" />
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
        <h1 className="text-4xl font-bold text-center ">{`</>What I've Done`}</h1>
        <Projects 
          theme={theme}
        />
      </section>


      <section className="w-[80vw] lg:w-[60vw] mx-auto mt-10" id="about">
        <h2 className="text-3xl font-bold text-center mb-10">About me</h2>

        <section className="flex flex-col md:flex-row justify-center items-center gap-10">

       
            <img src="me.jpg" alt="Christian Monterrosa" className="w-52 h-52 rounded-full"loading="lazy"  />
       

          <section className="flex justify-center " >
            <ul>
             <About
              theme = {theme}
              fecha = {"Universidad Pedagógica de El Salvador 2023-2027 (Proceso)"}
              titulo = {"Ingeniería en Sistemas y Computación"}
              descripcion = {"Design and implementation of projects using programming techniques, construction of secure network infrastructure models, and auditing of information systems within organizations."}
             />
             <About
              theme = {theme}
              fecha = {"Kodigo 2024-2025 (Proceso)"}
              titulo = {"FullStack Jr"}
              descripcion = {"Web development: proficient in frontend technologies like JavaScript and React for building interactive interfaces, and backend technologies like PHP, Laravel, and MySQL for developing applications and managing databases."}
             />
            </ul>
          </section>

        </section>
      </section>

      <section className="mt-14">
        <h3 className="font-bold text-3xl text-center">Skills</h3>

        <Skills/>
      </section>


      <footer className="p-12">
        <p className="font-bold text-center p-10">&copy; 2024 All Rigths Reserved Christian Monterrosa</p>
      </footer>
    
    </div>
  )
}

export default Home
