import { createContext, useContext } from "react";
import useFetch, { API_BASE } from "../../../hooks/useFetch";

const CharacterAnimeContext = createContext();

export function CharacterAnimeProvider({characterId, children }) {
  const {
    data: charactersAnime,
    isLoading,
    error,
  } = useFetch(`${API_BASE}/characters/${characterId}/anime`);

  const value = {charactersAnime, isLoading, error};
  return (
    <CharacterAnimeContext.Provider value={value}>
      {children}
    </CharacterAnimeContext.Provider>
  );
}

export function useCharacterAnime() {
  const context = useContext(CharacterAnimeContext);
  if (!context) {
    throw new Error("useCharacterAnime must be used within a CharacterAnimeProvider");
  }
  return context;
}
