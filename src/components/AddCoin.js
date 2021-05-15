import React, { useContext, useState } from 'react'
import { WatchListContext } from './WatchListContext';

const AddCoin = () => {
    const [isActive, setActive]=useState(false);
    const {addCoin} = useContext(WatchListContext)
    const avalableCoins=[
        "bitcoin",
        "ethereun",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano"
    ]

    const handleClick = (coin) =>{
        addCoin(coin)
        setActive(false)
    }

    return (
        <div className="dropdown">
            <button onClick={()=>setActive(!isActive)} className="btn btn-primary dropdown-toggle" type="button">
                Add Coin
            </button>

            <div className={isActive? "dropdown-menu show" : "dropdown-menu"}>
                {avalableCoins.map((el) => {
                    return(
                        <a onClick={() => handleClick(el)} href="#" className="dropdown-item">{el}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default AddCoin
