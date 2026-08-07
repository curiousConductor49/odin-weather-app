export async function showStandardData(data, displays) {
    try {
        // destructure api data and dom elements
        const { conditions, humidity, windspeed, windgust, temp, feelslike, icon } = data;
        const [ conditionsDisplay, humidityDisplay, windspeedDisplay, windgustDisplay, tempDisplay, feelslikeDisplay, weatherIconDisplay ] = displays;

        // dynamically import weather icon
        const svgModule = await import(`../assets/${icon}.svg`);

        // set api data as dom element content
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