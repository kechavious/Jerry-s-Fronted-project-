/** 
 * @author Muyao Jerry Kong
 * Updated on 28/04/2024
 * This program is for fetching data from openweathermap
 * 
*/

//TODO: Debug and 1

// Get Geocoding of city

const apiKey = "c2c40238aec43b6f7ff79bb22ff9a526";
const weatherForm = document.querySelector("#weather");

async function getGeoCoding(){

    let geodata = {};
    const cityNameInput = weatherForm.querySelector(".city").value;
    console.log(cityNameInput);

    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityNameInput)}&appid=${apiKey}`);
    if (!response.ok) {
        throw new Error(`Network response was not ok (status ${response.status})`);
    }
    const data_1 = await response.json();
    if (data_1.length === 0) {
        alert("city not found");
        return;
    }
    const lat = data_1[0].lat;
    const lon = data_1[0].lon;
    console.log(lat);
    console.log(lon);
    geodata = { lat, lon };
    return geodata;
}

function displayWeather(geodata) {
    if (geodata) {
        const lat = geodata.lat;
        const lon = geodata.lon;

        var newWindow = window.open("weatherinfo/weather-info.html");

        if (newWindow) {
            newWindow.onload = function(){
                const generalInfo = newWindow.document.querySelector("#general-info");

                const cityName = generalInfo.querySelector(".city-name");
                var cityNameP = cityName.querySelector("p");

                const weatherPic = generalInfo.querySelector(".weather-pic");
                var weatherPicImg = weatherPic.querySelector("img");
                
                const weatherOf = generalInfo.querySelector(".weather-of");
                var weatherOfP = weatherOf.querySelector("p");

                const temperatureOf = generalInfo.querySelector(".temperature-of");
                var temperatureOfP = temperatureOf.querySelector("p");

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2c40238aec43b6f7ff79bb22ff9a526`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        var city = data.name;
                        var weatherDescription = data.weather[0].description;
                        var temperature = Math.round((data.main.temp) - 273.15) + "°C";
                        console.log(weatherDescription);
                        // Displaying city name
                        cityNameP.textContent = city;

                        // Displaying weather icon
                        switch (weatherDescription) {
                            case "thunderstorm with light rain":
                            case "thunderstorm with rain":
                            case "thunderstorm with heavy rain":
                            case "light thunderstorm":
                            case "thunderstorm":
                            case "heavy thunderstorm":
                            case "ragged thunderstorm":
                            case "thunderstorm with light drizzle":
                            case "thunderstorm with drizzle":
                            case "thunderstorm with heavy drizzle":
                                weatherPicImg.src = "weather_info_pic/thunderstorm.png";
                                break;

                            case "light intensity drizzle":
                            case "drizzle":
                            case "heavy intensity drizzle":
                            case "light intensity drizzle rain":
                            case "drizzle rain":
                            case "heavy intensity drizzle rain":
                            case "shower rain and drizzle":
                            case "heavy shower rain and drizzle":
                            case "shower drizzle":
                            case "light rain":
                            case "light intensity shower rain":
                                weatherPicImg.src = "weather_info_pic/light-rain.png";
                                break;
                                
                            case "moderate rain":
                            case "freezing rain":                         
                            case "shower rain":
                            case "ragged shower rain":
                                weatherPicImg.src = "weather_info_pic/moderate-rain.png";
                                break;
                                
                            case "heavy intensity rain":
                            case "very heavy rain":
                            case "extreme rain":
                            case "heavy intensity shower rain":
                            case "squalls":
                                weatherPicImg.src = "weather_info_pic/heavy-rain.png";
                                break;

                            case "light snow":
                            case "snow":
                            case "heavy snow":
                            case "light shower snow":
                            case "shower snow":
                            case "heavy shower snow":
                                weatherPicImg.src = "weather_info_pic/snow.png";
                                break;

                            case "sleet":
                            case "light shower sleet":
                            case "shower sleet":
                            case "light rain and snow":
                            case "rain and snow":
                                weatherPicImg.src = "weather_info_pic/sleet.png";
                                break;

                            case "mist":
                            case "smoke":
                            case "haze":
                            case "sand":
                            case "dust whirls":
                            case "fog":
                            case "sand":
                            case "dust":
                            case "volcanic ash":
                                weatherPicImg.src = "weather_info_pic/fog.png";
                                break;
                            
                            case "clear sky":
                                weatherPicImg.src = "weather_info_pic/sunny.png";
                                break;

                            case "few clouds":
                            case "scattered clouds":
                            case "broken clouds":
                            case "overcast clouds":
                                weatherPicImg.src = "weather_info_pic/cloudy.png";
                                break;
                            default:
                                cityNameP.textContent = "Uh-oh, there's seem to be no weather condition for this city";
                                break;
                        }

                        // Displaying weather (textual)
                        weatherOfP.textContent = weatherDescription;

                        temperatureOfP.textContent = temperature;

                    });
            };
            
        } else {
            console.error("failed to open new window");
        }
        
    } else {
        console.error("Cannot find any geodata");
    }
}

function main(){
    const cityNameSubmit = weatherForm.querySelector("input[type='submit']");
    cityNameSubmit.addEventListener("click", async function(event) {
        event.preventDefault();
        try {
            const geodata = await getGeoCoding();
            displayWeather(geodata);
        } catch (error) {
            console.error("Error getting geocoding data:", error);
        }
    });
}

main();