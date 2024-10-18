import styles from "./banner.module.css"
import imagem from "../../imagens/Banner.png"

export default function Banner() {
    return (
        <div className={styles.capa}>
            <img src={imagem}/>
        </div>

    )
}