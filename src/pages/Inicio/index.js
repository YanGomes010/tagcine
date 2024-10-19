import Banner from "Components/Banner";
import Titulo from "Components/Titulo";
import Card from "Components/Card";

import styles from "./Inicio.module.css"
import banner from "../../imagens/Banner.png"
import { useEffect, useState } from "react";

export default function Inicio(){

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        fetch("https://my-json-server.typicode.com/yangomes010/tagcine-api/videos")
        .then(res=>res.json())
        .then(dados=>{
            setVideos(dados)
        })
    },[])

    return(
        <>
        <Banner imagem={banner}/>
        <Titulo>
            <h1>Um lugar para guardar seus videos e filmes</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map(video => <Card {...video} key={video.id}/>)}
        </section>
        </>
    )
}

