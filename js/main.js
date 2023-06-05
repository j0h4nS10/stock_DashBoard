import { apiStock,stockChart,polygondata } from './modules/utils.js';
import {
    hightGraph,
    volumeGraph,
    lowGraph,
    hightGraph2,
    volumeGraph2,
    lowGraph2,
    viewDataBtn
} from './modules/DOMElements.js';


// execute the dashBoard
const myChart = async () => {
    try {
        //let dataStock = await apiStock('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
        let data1raw = await apiStock
        ('https://api.polygon.io/v2/aggs/ticker/MU/range/1/day/2023-01-01/2023-06-30?apiKey=ukpp9BZvK1spdexOWLGB223Yp8q5kz0p');
        let data2raw = await apiStock
        ('https://api.polygon.io/v2/aggs/ticker/IBM/range/1/day/2023-01-01/2023-06-30?apiKey=ukpp9BZvK1spdexOWLGB223Yp8q5kz0p');
        console.log(data1raw.results);
        console.log(data2raw.results);
        let data1 = polygondata(data1raw.results);
        let data2 = polygondata(data2raw.results);
        console.log(data1, data2);
        stockChart(data1.date, data1.hight, hightGraph, "Hight Price" );
        stockChart(data1.date, data1.volume, volumeGraph, "Volumen Per Day" );
        stockChart(data1.date, data1.low, lowGraph, "Low Price" );
        stockChart(data2.date, data2.hight, hightGraph2, "Hight Price 2" );
        stockChart(data2.date, data2.volume, volumeGraph2, "Volumen Per Day");
        stockChart(data2.date, data2.low, lowGraph2, "Low Price");
        //console.log(dataStock);
        //stockChart(dataApi.results, lowGraph, "Low Price");
    } catch (error) {

    }
}

// default loading
//myChart();

viewDataBtn.addEventListener('click',myChart());

