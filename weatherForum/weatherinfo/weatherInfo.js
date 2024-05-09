// TODO

function adjustFont() {
    window.onload = function() {
        const generalInfo = document.querySelector("#general-info");

        var cityNameBox = generalInfo.querySelector(".city-name");
        var weatherOfBox = generalInfo.querySelector(".weather-of");


        console.log(cityNameBox);
        console.log(weatherOfBox);

        var cityNameContent = cityNameBox.querySelector("p").textContent.trim();

        console.log(cityNameContent);
        // console.log(weatherOfContent);

        var weatherOfContent = weatherOfBox.textContent.trim();

        var cityNameLength = cityNameContent.length;
        var weatherOfLength = weatherOfContent.length;

        var cityNameBoxWidth = cityNameBox.offsetWidth;
        var weatherOfBoxWidth = weatherOfBox.offsetWidth;

        var cityNameFontSize = Math.min(cityNameBoxWidth / cityNameLength);
        var weatherOfFontSize = Math.min(weatherOfBoxWidth / weatherOfLength);

        cityNameBox.style.cityNameFontSize = cityNameFontSize + "px";
        weatherOfBox.style.weatherOfFontSize = weatherOfFontSize + "px";

    }
}

adjustFont();

