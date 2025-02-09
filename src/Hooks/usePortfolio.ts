import { useContext } from "react"
import PortfolioContext from "../context/PortfolioProvider"


export const usePortfolio = () =>{
    const context = useContext(PortfolioContext);

    if(!context){
        throw new Error("El hook usePortfolio debe ser utilizado en un PortfolioProvider")
    }

    return context
}