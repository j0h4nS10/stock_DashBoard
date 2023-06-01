
// axios promise
export const apiStock = async (url) => {
    try {
        const { data } = await axios.get(url);
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}

// data

export const stockSplit = (data) => {
    console.log(Object.keys(data).length);
    let datalength = (Object.keys(data).length);
    console.log(datalength);
    let open = [];
    let close = [];
    let low = [];
    let volume = [];
    for (const key of Object.keys(data)) {
        const part = data[key];
        console.log(`la key es ${key} y la parte es ${part}`);
        //console.log(`la key es ${'data.Time_Series_(5min)'} y si funciono `);
        console.log(data[key].open);
        for (const key of Object.keys(part)) {
            const part2 = part[key]
            console.log(part2);
            console.log(part2.open);
            for (const key of Object.keys(part2)) {
                const part3 = part2[key]
                console.log(`el key es ${key} y la parte 3 es ${part3}`);
                if (key == "1. open") {
                    console.log(part3);
                    open.push(part3);
                } else if (key == "2. high") {
                    console.log(part3);
                    close.push(part3);
                } else if (key == "3. low") {
                    console.log(part3);
                    low.push(part3);
                } else if (key == "5. volume") {
                    console.log(part3);
                    volume.push(part3);
                }
                else {
                    console.log("error");
                }
            }
        }
    }
    console.log(volume)
    return { open: open, close: close, low: low, volume: volume }
}


// canva stock graph

export const stockChart = (data, canva, label) => {
    new Chart(canva, {
        type: 'line',
        data: {
            labels: data,
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
