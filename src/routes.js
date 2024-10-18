import Cabecalho from "Components/Cabecalho";
import Container from "Components/Container";
import Rodape from "Components/Rodape/index.js";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecalho/>
        <Container>
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/favoritos' element={<Favoritos/>}></Route>
            </Routes>
            </Container>
            <Rodape/>
        </BrowserRouter>
    )
}

