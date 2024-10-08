let weather = {
    "apiKey": "75b7668aa431a6d5f77c0e30994c6397",
    // Once the URL is fetch then the Response will..
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city + "&units=imperial&appid=" + this.apiKey
            )
            .then((response)=> response.json())
            .then((data)=> this.displayWeather(data));
    },
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
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// Warning: this runs at the beginning before the button is created 
//  So 'defer' in the script tag (ex. <script src="/file name.js" defer></script>)
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        weather.search();
    }
})

weather.fetchWeather("Denver")