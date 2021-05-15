import React, { useEffect, useRef } from 'react'
import {historyOptions} from '../chartConfigs/chartConfigs'
import { Chart, registerables } from 'chart.js';
import moment from 'moment'
moment().format();
Chart.register(...registerables);


const Graph = ({coinData}) => {
    const chartRef =  useRef()  
    const {prices, detail} = coinData
    
    console.log(prices)
    useEffect(()=>{
        if(chartRef && chartRef.current){
            const myChart = new Chart(chartRef.current, {
                type: "line",
                data: {
                    datasets: [{
                        label: '# of Votes',
                        data: prices,

                        backgroundColor: "rgba(174, 305, 194, 0.5)",
                        fill: true,
                        borderWidth: 1
                    }]
                },
                options: historyOptions
            });
        }
    }, [])

    return (
        <div className="bg-white border mt-2 reounded p-3">
            <div></div>
            <div>
                <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
            </div>
        </div>
    )
}

export default Graph


