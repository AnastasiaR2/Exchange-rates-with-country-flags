
    let date = new Date()
    
    let h1 = document.querySelector('h1');

    h1.innerHTML = `Курси валют від НБУ на ${date.toLocaleDateString()}`;
    
    let currencyList = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        currencyList = await currencyList.json();

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

    elementsContainer.innerHTML = currencyList.map(item => {
        let flags = item.countries.map(country => `<img src="${country.flags.png}" alt="" class="border me-3 position-relative" style="width: 60px" onMouseOver="showTooltip()">`).join('');
        return `
        <div class="row row-col-3 align-items-center mb-3 p-2 border border-dark">
            <div class="col">${item.txt} (${item.cc})</div>
            <div class="col">Курс: ${item.rate} грн.</div>
            <div class="col-8">${flags}</div>
        </div>`
    }).join('');
    
    document.querySelectorAll('img');
    function showTooltip(img){
        
        img.innerHTML = test;
    }
    



