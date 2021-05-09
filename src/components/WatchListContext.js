import React, { createContext,  useState } from "react"

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
    const [WatchList, setWatchList] = useState(["bitcoin", "ethereum", "ripple"])

    return(
        <WatchListContext.Provider value={{WatchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}