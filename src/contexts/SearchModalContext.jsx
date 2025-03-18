import { createContext, useContext, useState } from "react";

const SearchModalContext = createContext();

export function SearchModalProvider({children}) {
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);

  return <SearchModalContext.Provider value={{isOpenSearchModal , setIsOpenSearchModal}}>{children}</SearchModalContext.Provider>
}

export function useSearchModal() {
  const context = useContext(SearchModalContext);
  if (context === "undefined") {
    throw new Error("SearchModalContext was used outside of Provider");
  }
  return context;
}