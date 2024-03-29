const request = require('request');

// Token mapbox.com - pk.eyJ1IjoiaXNqMTAiLCJhIjoiY2syaGR3cjY3MTFneDNvbzIzMW45NnlocSJ9.PNsJsXysZ1h2-BXA3FtaiA

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiaXNqMTAiLCJhIjoiY2syaGR3cjY3MTFneDNvbzIzMW45NnlocSJ9.PNsJsXysZ1h2-BXA3FtaiA'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            })
        }
    })
};

module.exports = geocode;