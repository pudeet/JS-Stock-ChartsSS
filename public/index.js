function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}
// step 2 part three-- creating a fecth request 
async function main( ) {
    const timeChartCanvas = document.querySelector('#time-chart');

    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');

    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

        const response = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=b2b0e11651294ee9a789558a1625b754')

        const result = await response.json()
        
        const { GME, MSFT, DIS, BNTX } = result;

        const stocks = [GME, MSFT, DIS, BNTX];
    
        stocks.forEach( stock => stock.values.reverse())
}
