export class WeatherData {
    constructor(userInputLocation) {
        this.location = userInputLocation;
        this.apiKey = "7LVJRQVYQG7M8VGRCKHUCV5B3";
    }

    // async methods to fetch API data
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

    async queryTempFahrenheitData() {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?key=${this.apiKey}&include=current&elements=temp,feelslike`);
            const data = await response.json();

            return data;
        } catch (error) {
            console.log("Error:", error.message);
        }
    }

    // methods to slim API data into smaller objects
    processStandardData(data) {
        const { conditions, humidity, windspeed, windgust, temp, feelslike, icon } = data.currentConditions;
        const weatherObj = { conditions, humidity, windspeed, windgust, temp, feelslike, icon };

        return weatherObj;
    }

    processTempData(data) {
        const { temp, feelslike } = data.currentConditions;
        const tempObj = { temp, feelslike };

        return tempObj;
    }
}