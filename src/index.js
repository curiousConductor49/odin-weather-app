// module imports
import { cleanUserInput } from "./user-input/clean-user-input.js";
import { formatUserInput } from "./user-input/format-user-input.js";
import { WeatherData } from "./api-data/weather-data.js";
import { showStandardData } from "./data-display/show-standard-data.js";
import { showTempData } from "./data-display/show-temp-data.js";

// DOM elements
const weatherSearchForm = document.querySelector("#search-form");
const weatherSearchBar = document.querySelector("#weather-search");
const errorMsgDialog = document.querySelector("#error-message-dialog");
const closeDialogBtn = document.querySelector("#close-dialog-btn");
const tempUnitToggle = document.querySelector("#temp-unit-toggle");

const weatherDisplay = document.querySelector("#weather-display");
const locationDisplay = document.querySelector("#location-display");
const conditionsDisplay = document.querySelector("#conditions-display");
const humidityDisplay = document.querySelector("#humidity-display");
const windspeedDisplay = document.querySelector("#windspeed-display");
const windgustDisplay = document.querySelector("#windgust-display");
const tempDisplay = document.querySelector("#temp-display");
const feelslikeDisplay = document.querySelector("#feelslike-display");
const weatherIconDisplay = document.querySelector("#weather-icon-display");

// set DOM weather display visibility to hidden
window.addEventListener("load", () => weatherDisplay.style.visibility = "hidden");

// form submission calls anon async callback wrapping the bulk of the program
weatherSearchForm.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        // request standard weather API data
        const location = cleanUserInput(event.target.querySelector("#weather-search").value);
        const weather = new WeatherData(location);
        const apiResults = await weather.queryStandardData();
        
        // cleanly notify user of request errors with a basic modal
        if (apiResults === undefined) {
            errorMsgDialog.showModal();
            return;
        } else {
            // request temperature API data (celsius, fahrenheit)
            const apiTempCelsiusResults = await weather.queryTempCelsiusData();
            const apiFahrenheitResults = await weather.queryTempFahrenheitData();

            // slim and store API data as smaller objects
            const standard = weather.processStandardData(apiResults);
            const tempCelsius = weather.processTempData(apiTempCelsiusResults);
            const tempFarenheit = weather.processTempData(apiFahrenheitResults);

            // update DOM with API data and user input location
            const displays = [conditionsDisplay, humidityDisplay, windspeedDisplay, windgustDisplay, tempDisplay, feelslikeDisplay, weatherIconDisplay];

            weatherDisplay.style.visibility = "visible";
            weatherSearchBar.value = "";
            locationDisplay.textContent = formatUserInput(location);
            showStandardData(standard, displays);

            // set up toggle to switch between celsius and fahrenheit
            tempUnitToggle.addEventListener("change", (event) => event.target.checked ? showTempData(tempCelsius, displays, true) : showTempData(tempFarenheit, displays, false));
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
})

closeDialogBtn.addEventListener("click", () => errorMsgDialog.close());