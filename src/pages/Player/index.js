import Banner from "Components/Banner"
import Titulo from "Components/Titulo"
import playerImage from "../../imagens/BannerPlayer.png"
import { useParams } from "react-router-dom"
import NaoEncontrada from "pages/NaoEncontrada"
import { useEffect, useState } from "react"

export default function Player() {

    const [video, setvideo] = useState([]);
    const parametros = useParams();
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/yangomes010/tagcine-api/videos?id=${parametros.id}`)
        .then(res=>res.json())
        .then(dados=>{
            setvideo(...dados)
        })
    },[])

    if(!video){
        return <NaoEncontrada/>
    }

    return (
        <>
            <Banner imagem={playerImage}  />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section>
            <iframe 
            width="560" 
            height="315"
            src={video.link}
            title={video.titulo} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            ></iframe>
            </section>
        </>
    )
}