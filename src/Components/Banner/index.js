import styles from "./banner.module.css"


export default function Banner({imagem}) {
    return (
        <div className={styles.capa}>
            <img src={imagem}/>
        </div>

    )
}