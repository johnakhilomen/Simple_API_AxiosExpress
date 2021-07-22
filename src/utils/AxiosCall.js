const axios = require("axios");

class AxiosCall {
    _url = "https://jsonplaceholder.typicode.com/" ;
    
    constructor(){}

    axiosCall = async (data, subUrl, method) => {
        if ( data == undefined )
        {
            return await axios({
                method: method,
                url: `${this._url}${subUrl}`
            }); 
        }
        return await axios({
            method: method,
            data: data,
            url: `${this._url}${subUrl}` 
        })
    }

    post = async (data, subUrl) => this.axiosCall(data, subUrl, "POST")
    get = async (subUrl) => this.axiosCall(undefined, subUrl, "GET")
}

module.exports = new AxiosCall();