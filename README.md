# Weather App

##  _Displays weather in a city_

Created a weather app that displays ```weather```, ```icon```, ```description```, ```temprature```, and ```humidity```
based on user's input

Used [OpenWeatherMap](https://openweathermap.org/) API to fetch datas 


Utilized [OpenWeatherMap](https://openweathermap.org/) API's JSON file to fetch:
: - ```weather```, ```icon```, ```description```, ```temprature```, and ```humidity```

Example:
 ```
displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°F";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "mph";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    }
```

## Display Features
- City name
- Temprature in fahrenheit
- Icon
- Weather description
- Humidity 
- Wind speed calculated in mph 

Utilized HTML to link JavaScript file, CSS file and a url link [Unsplash](https://source.unsplash.com/1600x900/?landscape) 
* In HTM (https://source.unsplash.com/1600x900/?landscape) and
* https://unsplash.com/developers

Utilized CSS to style `body`, `.card`, `.search`, `button`, `.search-bar`, `.temp`,  `.flex` as well as other classes in the HTML file to modifiy format
