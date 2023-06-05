
// axios promise
export const apiStock = async (url) => {
    try {
        const response = await axios.get(url);
        console.log(response)
        const {data} = await response
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

// function API polygon stock data

export const polygondata = (data) => {
    let volume = [];
    let hight = [];
    let close = [];
    let date = [];
    let low = [];
    for (const key of Object.keys(data)){
        const el = data[key];
        console.log(el.v)
        console.log(el.vw);
        let Day = `${(new Date(el.t)).getDate()}-${(new Date(el.t)).getMonth()+1}-${(new Date(el.t)).getFullYear()}`;
        //date.push(Date.getDate);
        date.push(Day);
        volume.push(el.v);
        hight.push(el.h);
        close.push(el.c);
        low.push(el.l);  
    }
return {date : date, hight : hight, close : close, low : low, volume : volume}
}


// canva stock graph

export const stockChart = (labels, data, canva, label) => {
    new Chart(canva, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false
        }
    });
}




