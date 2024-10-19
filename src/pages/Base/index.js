import Cabecalho from "Components/Cabecalho";
import Container from "Components/Container";
import Rodape from "Components/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

export default function Base(){
    return(
        <main>
                <Cabecalho/>
                <FavoritosProvider>
                    <Container>
                        <Outlet/>
                    </Container>
                </FavoritosProvider>
                <Rodape/>
        </main>
    )
}