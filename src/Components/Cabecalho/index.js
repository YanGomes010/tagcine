import { Link } from "react-router-dom"
import styles from "./cabecalho.module.css"
import logo from "../Cabecalho/logo.svg"
import CabecalhoLink from "Components/CabecalhoLink"

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"/>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Inicio
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos 
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;