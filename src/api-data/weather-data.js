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
    - catch any errors using status codes provided by the API
- async query celsius temperature API data
    - create url request string using weather location (add unitGroup param)
    - fetch and return API data using request string
    - catch any errors using status codes provided by the API
- async process weather API data 
    - accepts the resolved API data (JSON) as arg
    - converts the API data into a js obj
    - create and return a js object w/ only the necessary data
*/