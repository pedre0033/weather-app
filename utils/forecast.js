const request = require('request');

// Token darksky.net - cccaf1967f8ecb26371b340a9adfb178

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/cccaf1967f8ecb26371b340a9adfb178/'+ latitude + ',' + longitude + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                chanceOfRain: body.currently.precipProbability
            })
        }
    })
};

module.exports = forecast;