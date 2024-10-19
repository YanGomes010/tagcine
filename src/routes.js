import Base from "pages/Base";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes(){
    return(
        <BrowserRouter>       
                     <Routes>
                        <Route path="/" element={<Base/>}>
                        <Route index element={<Inicio/>}></Route>
                        <Route path='favoritos' element={<Favoritos/>}></Route>
                        <Route path=":id" element={<Player/>}></Route>
                        <Route path="*" element={<NaoEncontrada/>}></Route>
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

