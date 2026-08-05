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
import { WeatherData } from "./api-data/weather-data.js";


// TESTING ZONE
// const weatherSearchForm = document.querySelector("#search-form");
// const weatherSearchBar = document.querySelector("#weather-search");

// weatherSearchForm.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const userInput = event.target.querySelector("#weather-search").value;
//     const weather = new WeatherData(userInput);
//     const apiResults = await weather.queryStandardData();
//     const apiMetricResults = await weather.queryMetricData();
//     const slimmedResults = weather.processData(apiResults);

//     console.log(apiMetricResults);
//     console.log(apiResults);
//     console.log(slimmedResults);
// })