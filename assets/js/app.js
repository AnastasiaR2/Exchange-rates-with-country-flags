
  let currency = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
      currency = await currency.json();

  console.log(currency);
  
  let countries = await fetch('https://restcountries.com/v3.1/all');
      countries = await countries.json();

  console.log(countries);