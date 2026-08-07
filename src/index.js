/* 
PSEUDOCODE

top-level:
module imports (api-data, data-display, user-input)

event listener scope:
- user btn click -> anon async callback wrapping the bulk of the program
    - await fetch weather API data, both general and celsius temp (async)
    - set DOM display visibility from hidden to visible
    - display weather API data (async)
    - attach event listener to temp toggle checkbox
        - checks if checkbox is checked or unchecked
        - if checked, display celsius temp data
        - else, display fahrenheit temp data
    - attach event listener to error msg dialog
        - close dialog when close btn is clicked
*/

import { cleanUserInput } from "./user-input/clean-user-input.js";
import { formatUserInput } from "./user-input/format-user-input.js";
import { WeatherData } from "./api-data/weather-data.js";
import { showStandardData } from "./data-display/show-standard-data.js";
import { showTempData } from "./data-display/show-temp-data.js";


// TESTING ZONE
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

window.addEventListener("load", () => weatherDisplay.style.visibility = "hidden");

weatherSearchForm.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        const userInput = cleanUserInput(event.target.querySelector("#weather-search").value);

        const weather = new WeatherData(userInput);
        const apiResults = await weather.queryStandardData();
        
        if (apiResults === undefined) {
            errorMsgDialog.showModal();
            return;
        } else {
            const apiTempCelsiusResults = await weather.queryTempCelsiusData();
            const apiFahrenheitResults = await weather.queryTempFahrenheitData();

            const standard = weather.processStandardData(apiResults);
            const tempCelsius = weather.processTempData(apiTempCelsiusResults);
            const tempFarenheit = weather.processTempData(apiFahrenheitResults);

            const displays = [conditionsDisplay, humidityDisplay, windspeedDisplay, windgustDisplay, tempDisplay, feelslikeDisplay, weatherIconDisplay];

            console.log(apiResults);
            console.log(standard);
            console.log(tempCelsius);
            console.log(tempFarenheit);

            weatherDisplay.style.visibility = "visible";
            weatherSearchBar.value = "";
            locationDisplay.textContent = formatUserInput(userInput);
            showStandardData(standard, displays);

            tempUnitToggle.addEventListener("change", (event) => event.target.checked ? showTempData(tempCelsius, displays, true) : showTempData(tempFarenheit, displays, false));
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
})
closeDialogBtn.addEventListener("click", () => errorMsgDialog.close());