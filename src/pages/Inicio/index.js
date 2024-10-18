import Banner from "Components/Banner";
import Titulo from "Components/Titulo";
import Card from "Components/Card";
import videos from "json/db.json"
import styles from "./Inicio.module.css"

export default function Inicio(){
    return(
        <>
        <Banner/>
        <Titulo>
            <h1>Um lugar para guardar seus videos e filmes</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map(video => <Card {...video} key={video.id}/>)}
        </section>
        </>
    )
}

