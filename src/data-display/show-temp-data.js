/* 
PSEUDOCODE

function show temp data
Params: temp data (obj), data display containers (arr of DOM elements)
Body:
- set the properties of the js object (only temp data in Celsius) to be the text content of their respective DOM elements
*/

export function showTempData(data, displays, isUnitMetric) {
    try {
        const { temp, feelslike } = data;
        const [ , , , , tempDisplay, feelslikeDisplay ] = displays;

        tempDisplay.textContent = `${temp} ${isUnitMetric ? "C°" : "F°"}`;
        feelslikeDisplay.textContent = `Feels ${feelslike} ${isUnitMetric ? "C°" : "F°"}`;
    } catch (error) {
        console.log("Error:", error.message);
    }
}