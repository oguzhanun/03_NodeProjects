
const request = require('request');

const forecast = function (lat,long, callback ){

    return request({url:`http://localhost:8080/${lat}/${long}`}, (error,response)=>{
        if(error){
            callback("fjaşlsdfkjalşdsflkjas",undefined);
        } else if(0<0){
            callback("akljsdfkorıııırırırırırırır", undefined)
        } callback(undefined, response.data)
    })


}

module.exports= forecast;