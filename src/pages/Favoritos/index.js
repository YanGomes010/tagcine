import Banner from "Components/Banner"
import styles from "./favoritos.module.css"
import banner from "../../imagens/BannerFavoritos.png"
import Titulo from "Components/Titulo"
import Card from "Components/Card"
import { useFavoritoContext } from "contextos/Favoritos"

export default function Favoritos(){

    const {Favoritos} = useFavoritoContext();


    return(
    <>
    <Banner imagem={banner}/>
    <Titulo>
        <h1>Meus Favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        {Favoritos.map((fav)=>{
            return <Card {...fav} key={fav.id}/>
        })}
    </section>
    </>
    )
    
}