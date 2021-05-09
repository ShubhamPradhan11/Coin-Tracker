import React, { useContext, useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko'
import {WatchListContext} from './WatchListContext'

const CoinList = () => {
    const [coin, setCoin] = useState([])
    const {WatchList} = useContext(WatchListContext)
    console.log(WatchList)
    useEffect(()=>{
        const fetchData= async ()=>{
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin, ethereum"
                }
            })

            
        }

        fetchData()


    }, [])

    return (
        <div>
            
        </div>
    )
}

export default CoinList
