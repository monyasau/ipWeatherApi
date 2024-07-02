const express = require('express');
const axios = require('axios');
const app = express();
const port = 8081;

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest'; // Default to 'Guest' if visitor_name is not provided
    let clientIp = req.ip;
    //remove conditional block in production
    if(req.ip=="127.0.0.1"||"::1"){
    clientIp="102.89.22.143"
    console.log(clientIp)
    }
})
app.listen(port, ()=>{
    console.log("running on pprt",port);
})