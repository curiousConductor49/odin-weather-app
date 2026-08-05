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
        - temperature (temp, feelslike)
        - humidity
        - wind (windspeed, windgust)
        - conditions
        - icon
*/

export class WeatherData {
    constructor(userInputLocation) {
        this.location = userInputLocation;
        this.apiKey = "7LVJRQVYQG7M8VGRCKHUCV5B3";
    }

    async queryStandardData() {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?key=${this.apiKey}&include=current`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    async queryTempCelsiusData() {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?key=${this.apiKey}&unitGroup=metric&include=current&elements=temp,feelslike`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    processStandardData(data) {
        const { conditions, humidity, windspeed, windgust, temp, feelslike, icon } = data.currentConditions;
        const weatherObj = { conditions, humidity, windspeed, windgust, temp, feelslike, icon };

        return weatherObj;
    }

    processTempCelsiusData(data) {
        const { temp, feelslike } = data.currentConditions;
        const tempObj = { temp, feelslike };

        return tempObj;
    }
}