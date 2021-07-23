const axios = require("axios");

class AxiosAgent {
    _url = "https://jsonplaceholder.typicode.com/" ;
    
    constructor(){}

    AxiosAgent = async (data, subUrl, method) => {
        try
        {
            //axios.interceptors.request.use()
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
                url: `${this._url}${subUrl}`,
                timeout: 500 
            })
        }
        catch(err) {
            console.log(err.message)
            res.send(err.message)
        }
        
    }

    post = async (data, subUrl) => this.AxiosAgent(data, subUrl, "POST")
    get = async (subUrl) => this.AxiosAgent(undefined, subUrl, "GET")
    put = async (data, subUrl) => this.AxiosAgent(data, subUrl, "PUT")
    delete = async (subUrl) => this.AxiosAgent(undefined, subUrl, "DELETE")
}

module.exports = new AxiosAgent();