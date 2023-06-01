import { apiStock,stockSplit,stockChart } from './modules/utils.js';
import {
    hightGraph,
    volumeGraph,
    lowGraph,
    viewDataBtn
} from './modules/DOMElements.js';



// execute the dashBoard
const myChart = async () => {
    try {
        let dataStock = await apiStock('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
        console.log(dataStock);
        let data = stockSplit(dataStock);
        console.log(data);
        stockChart(data.open, hightGraph, "Hight Price");
        stockChart(data.volume, volumeGraph, "volume Per Day");
        stockChart(data.low, lowGraph, "Low Price");
    } catch (error) {

    }
}

viewDataBtn.addEventListener('click',myChart);

//myChart();
