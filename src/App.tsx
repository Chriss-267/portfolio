import { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import "../styles.css"



function App() {

  const themeLocalStorage = localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme") as string) : true;

  const [theme, setTheme] = useState(themeLocalStorage);

  useEffect(() =>{
        localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const changeTheme = () => {
    if (theme) {
      setTheme(false)

    } else {
      setTheme(true)

    }
    console.log(theme);

  }

  return (
    <div className={`relative ${theme ? "cont" : "contLigth"} `}>

      <section className="bg-white bg-opacity-30 backdrop-blur-md translate fixed z-50 flex justify-around items-center
                   w-44 md:w-56 py-4  left-1/2 bottom-0 -translate-x-1/2 
                    lg:w-24  lg:left-0 lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2  lg:h-[30vh] md:px-4  lg:flex-col ">



        <a href="https://github.com/Chriss-267" target="_blank"><img src={theme ? "/skills/githubWhite.svg" : "/skills/githubBlack.svg"} alt="github" className="w-10 "/></a>
        <a href="https://www.linkedin.com/in/christian-eduardo-monterrosa-portillo-460916332/" target="_blank"><img src={theme ? "/skills/linkedin.svg" : "/skills/linkedingBlack.svg"}  alt="github" className="w-10" /></a>
        <a href="mailto:christianmonterrosaportillo@gmail.com" target="_blank"><img src={theme ? "/skills/email.svg" : "/skills/emailBlack.svg"} alt="github" className="w-10" /></a>
      </section>

      <section id="home">

        <Header
          theme={theme}
          changeTheme={changeTheme}
        />



      </section >

      <section>
      <Home
        theme={theme}
      />

      </section>
      


    </div>
  )
}

export default App
