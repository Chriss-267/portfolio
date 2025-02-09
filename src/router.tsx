import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Views/Home";
import Projects from "./components/Projects";
import About from "./components/About";


const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true,
                element : <Home/>
            },
            {
                path : "/projects",
                element : <Projects/>
            },
            {
                path : "/about",
                element : <About/>
            }
        ]
    }
])

export default router