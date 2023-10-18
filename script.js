const log = (param) => console.log(param);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    const data = JSON.parse(xhr.response);
    
    log(data)
    const countries= data.filter((value,i)=>value.region === "Asia");
      
    log(countries);

    const countryPopulation =data.filter((value,i)=>value.population<20000);
    log(countryPopulation);

    const totalPopulation = data.reduce((acc,value)=>{
      return acc+value.population;
    },0);
    log(totalPopulation);

    const checkCurrency=data.map((value,i)=> {
      return (value.currencies)
    })
    log(checkCurrency);
    
    for (const name in checkCurrency) {
      if (Object.hasOwnProperty.call(checkCurrency, name)) {
        const element = checkCurrency[name];
        
        log (element);
      }
      
    }
    

  } else {
    console.log`request failed ${xhr.status}`;
  }


}

