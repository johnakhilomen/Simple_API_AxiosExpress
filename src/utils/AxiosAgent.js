const axios = require("axios");

class AxiosAgent {
    _url = "https://jsonplaceholder.typicode.com/" ;
    
    constructor(){}

    AxiosAgent = async (data, subUrl, method) => {
        const token = "GGD9F9H9U0FM0UMUE9RUM08UGURM";
        const headersConf = {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
        }; 
        const axiosConfig = {
            method: method,
            data: data,
            url: `${this._url}${subUrl}`,
            timeout: 500,
            headers: headersConf  
        };
        try
        {
            if ( data == undefined )
            {
                //Deconstructing axiosConfig and omitting both headers and timeout 
                const {headers, timeout, ...rest} = axiosConfig;
                console.log({...rest})
                return await axios({
                   ...rest
                }); 
            }
            return await axios(axiosConfig)
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