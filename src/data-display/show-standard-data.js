/* 
PSEUDOCODE

function show general data
Params: weather data (obj), data display containers (arr of DOM elements)
Body:
- set the properties of the js object to be the text content of their respective DOM elements (including the img src for the weather icon)
*/


export async function showStandardData(data, displays) {
    try {
        const { conditions, humidity, windspeed, windgust, temp, feelslike, icon } = data;
        const [ conditionsDisplay, humidityDisplay, windspeedDisplay, windgustDisplay, tempDisplay, feelslikeDisplay, weatherIconDisplay ] = displays;
        const svgModule = await import(`../assets/${icon}.svg`);

        conditionsDisplay.textContent = conditions;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        windspeedDisplay.textContent = `Wind: ${windspeed} mph`;
        windgustDisplay.textContent = `Gust: ${windgust} mph`;
        tempDisplay.textContent = `${temp} F°`;
        feelslikeDisplay.textContent = `Feels ${feelslike} F°`;
        weatherIconDisplay.src = svgModule.default;
        weatherIconDisplay.alt = conditions.toLowerCase();
    } catch (error) {
        console.log("Error:", error.message);
    }
}