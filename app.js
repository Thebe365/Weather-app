let searchCity = document.querySelector('.city-search');
let cityName = document.querySelector('.city-name');
let temp = document.querySelector('.temp');
let currWeath = document.querySelector('.curWeath');
let weathDesc = document.querySelector('.description');
let cDate = document.querySelector('.cDate');
let weath_icon = document.querySelector('.weath-icon');
let currDate1 = new Date();
let nextQuery = '';
let data = '';

cDate.innerHTML = currDate1.toDateString();
searchCity.onclick = getcity;




function getcity(){
    nextQuery = document.querySelector('.searchResult').value;
    // cityName.innerHTML = nextQuery;
    console.log("The city you selected is: " + nextQuery);
   
    
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q="+ nextQuery +"&lat=0&lon=0&lang=null&units=metric", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "c387bb3d17mshbc2896ab6355201p1126fdjsn87093d7f8740"
        }
    }).then(response => response.json()).then(data => {
        console.log(data);
        // populate variables
        let countryName = data.sys.country;
        let name = data.name;
        let weathertype = data.weather[0].main;
        let weathTempe = data.main.temp;
        let weatherDesc = data.weather[0].description;

        // Populate elements
        cityName.innerHTML = name + ", " + countryName;
        temp.innerHTML = weathTempe;
        currWeath.innerHTML = weathertype;
        weathDesc.innerHTML = weatherDesc;
        weath_icon.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.weather[0].icon +'@2x.png')


        console.log(weathertype)
        console.log("Temperature: " + weathTempe);
        console.log("City name to be displayed is: " + name + " and its going to be: " + weathertype);
    }).catch(err => {
        console.error(err);
    });

  
}

