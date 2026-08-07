export function showTempData(data, displays, isUnitMetric) {
    try {
        // destructure api data and dom elements
        const { temp, feelslike } = data;
        const [ , , , , tempDisplay, feelslikeDisplay ] = displays;

        // set api data as dom element content, using the bool param to dynamically set temperature units
        tempDisplay.textContent = `${temp} ${isUnitMetric ? "C°" : "F°"}`;
        feelslikeDisplay.textContent = `Feels ${feelslike} ${isUnitMetric ? "C°" : "F°"}`;
    } catch (error) {
        console.log("Error:", error.message);
    }
}