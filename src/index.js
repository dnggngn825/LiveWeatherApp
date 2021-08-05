
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
function success(pos) {
    var crd = pos.coords;
    var lat = crd.latitude;
    var lon = crd.longitude;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);

    // Create object to fetch data
    let weather = {
        city: "Melbourne",
        API_KEY:"09e89a7a425148c3b39cf28839f1ab8f",
        fetchData: function() {
            fetch("https://api.openweathermap.org/data/2.5/weather?lat="+
            lat+
            "&lon="+
            lon+
            "&units=metric"+
            "&appid="+ 
            this.API_KEY)
            .then((res) => res.json())
            .then((data) => {
                let title = document.getElementById("title-text");
                let temp = document.getElementById("temp-text")
                let feel = document.getElementById("feel-like-text");
                let weatherDes = document.getElementById("weather-description");
                let humid = document.getElementById("humidity-text");
                let wind = document.getElementById("wind-speed-text");
                let word = data.weather[0].description;
                let min = document.getElementById("min-temp-text");
                let max = document.getElementById("max-temp-text");
                
                title.innerHTML = "Weather in " + data.name;
                temp.innerHTML = Math.round(data.main.temp) + '\xB0C';
                feel.innerHTML = "Feel like " + Math.round(data.main.feels_like) + '\xB0C';
                weatherDes.innerHTML = word[0].toUpperCase() + word.slice(1).toLowerCase();
                humid.innerHTML = "Humidity: " + data.main.humidity + "%";
                wind.innerHTML = "Wind speed: " + (data.wind.speed*3.6).toFixed(2) + " km/h";
                min.innerHTML = Math.round(data.main.temp_min) ;
                max.innerHTML = Math.round(data.main.temp_max) ;

                console.log("fetch data")
            })
        }
    }

    weather.fetchData()

}
  
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

const loadData = async () => {
    await navigator.geolocation.getCurrentPosition(success, error, options)
}

const loadTime = () => {
    var today = new Date();
    var time = today.getHours() + ":"+today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("time-text").innerHTML = time;
}

try
{
    navigator.geolocation.getCurrentPosition(success, error, options)
}
catch (e)
{
    console.log("Error " + e)
}

// setInterval(loadData,300000);

setInterval(loadTime,1000);
setInterval(loadData,300000);
  






