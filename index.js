const express = require('express');
const axios = require('axios');
const app = express();
const port = 8081;

app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest'; // Default to 'Guest' if visitor_name is not provided
    const clientIp = req.ip;
    console.log(clientIp);
})
app.listen(port, ()=>{
    console.log("running on pprt",port);
})