import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [Favoritos, setFavoritos] = useState([]);

  return (
    <FavoritosContext.Provider value={{ Favoritos, setFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { Favoritos, setFavoritos } = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = Favoritos.some(
      (item) => item.id === novoFavorito.id
    );
    let novaLista = [...Favoritos];
    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavoritos(novaLista);
    }

    novaLista = Favoritos.filter((fav) => fav.id !== novoFavorito.id);
    return setFavoritos(novaLista)
  }

  return{
    Favoritos,
    adicionarFavorito
  }
}
