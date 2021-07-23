const AxiosAgent = require("./utils/AxiosAgent");
const express = require("express");
const server = express()

const PORT = 3000;

server.use(express.json())

server.get("/posts", async (req, res)=>{
    const {data} = await AxiosAgent.get('posts');
    res.status(200).json(data)
})

server.delete("/posts/:id", async(req, res)=>{
    const {data} = await AxiosAgent.delete(`posts/${req.params.id}`)
    res.status(200).json(data)
})

server.post("/posts", async (req, res)=> {
    const {data} = await AxiosAgent.post(req.body, 'posts');
    res.status(201).json({"id" : data.id});
})

server.put("/posts/:id", async (req, res)=> {
    const {data} = await AxiosAgent.put(req.body, `posts/${req.params.id}`);
    res.status(200).json({"id" : data.id});
})

server.listen(PORT, ()=> {
    console.log(`Server started on ${PORT}`);
})