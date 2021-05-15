import React, { createContext,  useEffect,  useState } from "react"

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
    const [WatchList, setWatchList] = useState(localStorage.getItem("watchlist").split(',') || ["bitcoin", "ethereum", "ripple"])

    useEffect(()=>{
        localStorage.setItem("watchlist", WatchList)
    }, [WatchList])
   
    const deleteCoin = (coin) =>{
        setWatchList(WatchList.filter( el =>{
            return el!==coin
        }))
    }

    const addCoin = (coin) => {
        if(WatchList.indexOf(coin)===-1){
            setWatchList([...WatchList, coin])
        }
    }

    return(
        <WatchListContext.Provider value={{WatchList, deleteCoin, addCoin}}>
            {props.children}
        </WatchListContext.Provider>
    )
}