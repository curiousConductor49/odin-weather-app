/* 
PSEUDOCODE

class WeatherData
Params (constructor): user input (text string)
Properties:
- weather location (set as user input)
Methods:
- async query weather API data
    - create url request string using weather location
    - fetch and return API data using request string
    - catch any errors
- async query celsius temperature API data
    - create url request string using weather location (add unitGroup param)
    - fetch and return API data using request string
    - catch any errors
- async process weather API data 
    - accepts the resolved API data (JSON) as arg
    - converts the API data into a js obj
    - create and return a js object w/ only the necessary data
        - temperature (tempmax, tempmin, temp, feelslike)
        - humidity
        - windspeed
        - description
        - icon
*/

export class WeatherData {
    constructor(userInputLocation) {
        this.location = userInputLocation;
    }

    async queryWeatherData() {
        try {
            const apiKey = "7LVJRQVYQG7M8VGRCKHUCV5B3";
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?key=${apiKey}`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    async queryMetricData() {
        try {
            const apiKey = "7LVJRQVYQG7M8VGRCKHUCV5B3";
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?key=${apiKey}&unitGroup=metric`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    // async processWeatherData() {}
}