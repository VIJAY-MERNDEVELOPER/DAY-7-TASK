const log = (param) => console.log(param);

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = function () {
  if (xhr.status == 200) {
    const data = JSON.parse(xhr.response);

    log(data);

    log(
      "Get all the countries from Asia continent /region using Filter function"
    );

    const countries = data.filter((value) => value.region === "Asia");

    log(countries);

    log(
      "Get all the countries with a population of less than 2 lakhs using Filter function"
    );

    const countryPopulation = data.filter(
      (value, i) => value.population < 20000
    );
    log(countryPopulation);

    log("Print the total population of countries using reduce function");

    const totalPopulation = data.reduce((acc, value) => {
      return acc + value.population;
    }, 0);
    log(totalPopulation);

    log("Print the country which uses US Dollars as currency.");

    const checkCurrency = data.filter((data) => {
      return data.currencies && data.currencies.USD;
    });
    checkCurrency.forEach((value) => {
      log(value.name.common);
    });

    log(
      "Print the following details name, capital, flag, using forEach function"
    );

    data.forEach((value) => {
      log(`Name : ${value.name.common}
           Capital : ${value.capital}
           Flag    : ${value.flags.png}
           `);
    });
  } else {
    console.log`request failed ${xhr.status}`;
  }
};
