import React, { useContext, useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko'
import Coin from './Coin'
import {WatchListContext} from './WatchListContext'


const CoinList = () => {
    const [coin, setCoin] = useState([])
    const {WatchList, deleteCoin} = useContext(WatchListContext)
    const [isLoading, setisLoading] = useState(false)
    useEffect(()=>{
        const fetchData= async ()=>{
            setisLoading(true)
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: WatchList.join(",")
                }
            })
            setCoin(response.data)
            setisLoading(false)
        }

        if(WatchList.length>0){
            fetchData()
        }
        else setCoin([])
        
    }, [WatchList])

    const renderCoin= () => {
        if(isLoading){
            return <div>Loading...</div>
        }
        else{
            return(
                <ul className="counlist list-group mt-2">
                    {coin.map( coins => {
                        return <Coin key={coins.id} coin={coins} deleteCoin={deleteCoin}/>
                    })}
                </ul>
            )
        }
    }

    return (
        <div>{renderCoin()}</div>
    )
}

export default CoinList
