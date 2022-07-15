
    let currencyList = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        currencyList = await currencyList.json();

    let h1 = document.querySelector('h1');

    h1.innerHTML = `Курси валют від НБУ на ${currencyList[0].exchangedate}`;

    let countriesList = await fetch('https://restcountries.com/v3.1/all');
        countriesList = await countriesList.json();

    for(let i = 0; i < currencyList.length; i++){
        currencyList[i].countries = [];
        for(let j = 0; j < countriesList.length; j++){
            for(let key in countriesList[j].currencies){
                if(key == currencyList[i].cc){
                    currencyList[i].countries.push(countriesList[j]);
                }
            }
        }

    }

    console.log(currencyList);

    elementsContainer.innerHTML = currencyList.map(item => `

        <ul class="list-group list-group-horizontal mb-3">
            <li class="list-group-item py-3 border-dark">${item.txt} (${item.cc})</li>
            <li class="list-group-item py-3 border-dark">Курс: ${item.rate} грн.</li>
            <li class="list-group-item py-3 border-dark"></li>
        </ul>
    `).join('');




