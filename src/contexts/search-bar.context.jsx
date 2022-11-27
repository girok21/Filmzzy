import { createContext, useState } from "react";

export const SearchBarContext = createContext({
    isSearchBarOpen : false,
    setIsSearchBarOpen : ()=>null,
})

export const SearchBarProvider = ({children})=>{
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const value = {
        isSearchBarOpen, 
        setIsSearchBarOpen,
    };
    return(
        <SearchBarContext.Provider value={value}>{children}</SearchBarContext.Provider>
    )
}