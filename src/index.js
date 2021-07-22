const AxiosCall = require("./utils/AxiosCall");
const express = require("express");
const server = express()

const PORT = 3000;

server.use(express.json())

server.get("/posts", async (req, res)=>{
    try 
    {
        const {data} = await AxiosCall.get('posts');
        res.status(200).json(data)
    }
   catch(err) {
       console.log(err.message)
       res.send(err.message)
   }
})

server.post("/posts", async (req, res)=> {
    const {data} = await AxiosCall.post(req.body, 'posts');
    res.status(201).json({"id" : data.id});
})

server.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`);
})