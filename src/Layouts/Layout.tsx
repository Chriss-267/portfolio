import { Link, Outlet, useLocation } from "react-router-dom";
import { usePortfolio } from "../Hooks/usePortfolio";
import Modal from "react-modal";
import ModalProyecto from "../components/ModalProyecto";
import { useState } from "react";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false); // Menú cerrado por defecto
  const { theme, changeTheme, modal } = usePortfolio();
  const location = useLocation();
  const year = new Date().getFullYear();

  const handleClickMenuButton = () => {
    setMenuOpen(!menuOpen);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: theme ? "#171717" : "#fff",
      color: theme ? "#fff" : "#000",
      borderRadius: "1rem",
      border: "none",
      zIndex: 60,
    },
    overlay: {
      backgroundColor: theme ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
      zIndex: 50,
    },
  };

  return (
    <div className={`relative ${theme ? "bg-neutral-950" : "bg-white"}`}>
      {/* Menú móvil */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClickMenuButton} // Cierra el menú al hacer clic fuera
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 ${theme ? "bg-neutral-900" : "bg-white"} shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        

        <nav className="mt-16 p-4 space-y-4">
          <Link
            to="/"
            className={`block text-lg ${
              location.pathname === "/" ? "text-indigo-400" : `${theme ? "text-white" : "text-black"}`
            }`}
            onClick={handleClickMenuButton}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`block text-lg ${
              location.pathname === "/projects" ? "text-blue-400" : `${theme ? "text-white" : "text-black"}`
            }`}
            onClick={handleClickMenuButton}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`block text-lg ${
              location.pathname === "/about" ? "text-blue-400" : `${theme ? "text-white" : "text-black"}`
            }`}
            onClick={handleClickMenuButton}
          >
            About
          </Link>
          <a
            href="mailto:christianmonterrosaportillo@gmail.com"
            className={`block text-lg ${theme ? "text-white" : "text-black"}`}
            onClick={handleClickMenuButton}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Header */}
      <header
        className={`w-full h-[10vh] lg:h-[15vh] ${
          theme ? "text-white bg-neutral-900" : "text-black bg-white shadow-lg"
        } fixed top-0 left-0 ${modal ? "z-40" : "z-50"}`}
      >
        <nav className="flex py-3 font-bold h-full w-full text-center justify-evenly items-center md:space-y-0">
          {/* Botón hamburguesa (solo en móvil) */}
          <button className="md:hidden order-3" onClick={handleClickMenuButton}>
            {menuOpen ? (
              // Ícono de "X" (cerrar)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 transform transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            ) : (
              // Ícono de tres líneas (abrir)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 transform transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>

          <section className="md:w-[35vw] order-2 md:order-1">
            <Link className="text-lg" translate="no" to="/">
              Christian Monterrosa
            </Link>
          </section>

          <section
            className={`hidden md:flex justify-evenly md:w-[40vw] lg:w-[25vw] md:justify-between order-2`}
          >
            <Link
              className={`!no-underline ${
                location.pathname === "/"
                  ? "border-b-2 hover:border-b-2 border-blue-600"
                  : "border-b-2 border-transparent hover:border-b-2 hover:border-blue-400"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`!no-underline ${
                location.pathname === "/projects"
                  ? "border-b-2 hover:border-b-2 border-blue-600"
                  : "border-b-2 border-transparent hover:border-b-2 hover:border-blue-400"
              }`}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={`!no-underline ${
                location.pathname === "/about"
                  ? "border-b-2 hover:border-b-2 border-blue-600"
                  : "border-b-2 border-transparent hover:border-b-2 hover:border-blue-400"
              }`}
              to="/about"
            >
              About
            </Link>
            <a
              className="border-b-2 border-transparent hover:border-b-2 hover:border-blue-400"
              href="mailto:christianmonterrosaportillo@gmail.com"
            >
              Contact
            </a>
          </section>

          <section className="md:w-[25vw] order-1 md:order-3">
            <button onClick={changeTheme}>
              {theme ? (
                <i className="fa-solid fa-sun fa-lg"></i>
              ) : (
                <i className="fa-solid fa-moon fa-lg"></i>
              )}
            </button>
          </section>
        </nav>
      </header>

      {/* Contenido principal */}
      <div className="md:mt-[15vh]">
        <Outlet />
      </div>

      {/* Footer */}
      
        <footer
          className={`p-12 space-y-4 text-left ${
            theme ? "text-white" : "text-black"
          }`}
        >
          <section className="space-y-2">
            <h2 className="font-bold mb-6 text-xl">Contact</h2>
            <div className="flex justify-start gap-2 ">
              <img src={`${theme ? "../skills/email.svg" : "../skills/emailBlack.svg"}`} alt="logo email" className="w-6" />
              <a href="mailto:christianmonterrosaportillo@gmail.com">christianmonterrosaportillo@gmail.com</a>
            </div>
            <div className="flex justify-start gap-2 ">
              <img src={`${theme ? "../skills/linkedin.svg" : "../skills/linkedingBlack.svg"}`} alt="logo email" className="w-6" />
              <a href="mailto:christianmonterrosaportillo@gmail.com">LinkedIn</a>
            </div>
            <div className="flex justify-start gap-2 ">
              <img src={`${theme ? "../skills/githubWhite.svg" : "../skills/githubBlack.svg"}`} alt="logo email" className="w-6" />
              <a href="mailto:christianmonterrosaportillo@gmail.com">GitHub</a>
            </div>
          </section>
          <p className="pt-6 border-t md:w-1/3 w-full">
            &copy; {year} All Rights Reserved Christian Monterrosa
          </p>
          
      
      </footer>

      {/* Modal */}
      <Modal isOpen={modal} style={customStyles}>
        <ModalProyecto />
      </Modal>
    </div>
  );
}