import styles from "./naoEncontrada.module.css"

export default function NaoEncontrada(){
    return(
        <>
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>
                O conteúdo que você procura não foi encontrado!
            </p>
        </section>
        </>
    )
}