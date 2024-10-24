type HeaderProps ={
    theme:boolean,
    changeTheme :  () => void
}

function Header({theme, changeTheme}:HeaderProps) {
  return (
    <header className={`w-full md:h-[10vh] lg:h-[20vh] ${theme ? " text-white": "text-black"}`}>
        <nav className="py-3 space-y-6 font-bold  h-full w-full text-center md:flex md:justify-between lg:justify-evenly items-center md:space-y-0">
            <section className="md:w-[35vw]">
                <h2 className="text-lg" translate="no">Christian Monterrosa</h2>
            </section>

            <section className=" flex justify-evenly md:w-[40vw] lg:w-[25vw] md:justify-between">
                <a className=" border-b-2 border-transparent hover:border-b-2 hover:border-blue-600" href="#home">Home</a>
                <a className=" border-b-2 border-transparent hover:border-b-2 hover:border-blue-600" href="#projects">Projects</a>
                <a className=" border-b-2 border-transparent hover:border-b-2 hover:border-blue-600" href="#about">About</a>
                <a className=" border-b-2 border-transparent hover:border-b-2 hover:border-blue-600" href="mailto:christianmonterrosaportillo@gmail.com">Contact</a>
            </section>

            <section className=" md:w-[25vw]">
                <button
                onClick={changeTheme}
                >{theme ?  <i className="fa-solid fa-sun fa-lg"></i>  :  <i className="fa-solid fa-moon fa-lg"></i>}
                </button>
            </section>


        </nav>
    </header>
  )
}

export default Header