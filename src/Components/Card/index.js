import styles from "./card.module.css"
import iconeFavoritar from "./favoritar.png"
import iconesDesfavoritar from "./desfavoritar.png"
import { useFavoritoContext } from "contextos/Favoritos";
import { Link } from "react-router-dom";


export default function Card({id,titulo,capa}){

    const { Favoritos, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = Favoritos.some((fav) => fav.id === id);
    const icone = ehFavorito ? iconesDesfavoritar : iconeFavoritar;

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
                <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={()=>{
                    adicionarFavorito({id,titulo,capa})
                }}/>
        </div>
    )
}


