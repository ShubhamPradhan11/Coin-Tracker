import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import coinGecko from '../apis/coinGecko'
import CoinData from '../components/CoinData'
import Graph from '../components/Graph'

const CoinsDetailsPage=() => {
    const {id} = useParams()
    const [days, setDays] = useState(30)
    const [coinData, setCoinData] = useState({})
    const [loading, setLoading] = useState(false)
    
    const formateData = data =>{
        return(
            data.map(el=>{
                return{
                    x: el[0],
                    y: el[1].toFixed(2)
                }
            })
        )
    }
    useEffect(()=>{
        const fetch = async () => {
            setLoading(true)
            const [prices, detail] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: days.toString() 
                    }
                }),

                coinGecko.get("/coins/markets", {
                    params: {
                        vs_currency: "usd",
                        ids: id
                    }
                })
            ])

            setCoinData({
                prices: formateData(prices.data.prices),
                details: detail.data[0] 
            })    

            setLoading(false)
        }
        fetch()
    }, [])

    const renderData=()=>{
        if(loading) return <div>loading...</div>
        
        return(
            
            <div>
                <Graph coinData={coinData}/>
                <CoinData/>
            </div>
        )
    }

    return renderData()
}

export default CoinsDetailsPage
