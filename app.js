const request = require('request');

// Token darksky.net - cccaf1967f8ecb26371b340a9adfb178

/*const url = 'https://api.darksky.net/forecast/cccaf1967f8ecb26371b340a9adfb178/37.8267,-122.4233?units=si';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location!')
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }
});*/
// Token mapbox.com - pk.eyJ1IjoiaXNqMTAiLCJhIjoiY2syaGR3cjY3MTFneDNvbzIzMW45NnlocSJ9.PNsJsXysZ1h2-BXA3FtaiA

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cartagena,españa.json?access_token=pk.eyJ1IjoiaXNqMTAiLCJhIjoiY2syaGR3cjY3MTFneDNvbzIzMW45NnlocSJ9.PNsJsXysZ1h2-BXA3FtaiA&limit=1';

request( { url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service')
    } else if (response.body.features.length === 0){
        console.log('Place not found')
    } else {
        console.log('Latitude:', response.body.features[0].center[0], 'and longitude:', response.body.features[0].center[1])
    }
});