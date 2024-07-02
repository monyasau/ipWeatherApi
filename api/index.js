const express = require("express");
const axios = require("axios");
const app = express();
const port = 80;

app.get("/api/hello", async (req, res) => {
  try{const visitorName = req.query.visitor_name || "Guest"; // Default to 'Guest' if visitor_name is not provided
  let ipData = await axios.get("https://ipapi.co/json/");
  let clientIp = ipData.data.ip;
  let clientCity = ipData.data.city;
  let clientRegion = ipData.data.region;
  let weatherData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=49e72d8fff664667a7485456231008&q=${clientCity}&aqi=no`)
  let temperature = weatherData.data.current.temp_c;
  let greetingMessage =  `Hello ${visitorName}, the temperature is ${temperature} degrees Celcius in ${clientCity}`
  if (clientRegion && clientRegion !== clientCity) {
    greetingMessage += `, ${clientRegion}`
  }


  let responseObject ={
    client_ip: clientIp,
    location: clientCity,
    greeting: greetingMessage,
  }
  res.json(responseObject)
} catch (error) {
    console.error('Error fetching location or temperature:', error);
    res.status(500).json({ error: 'Internal Server Error occur, this will be fixed in a momment' });
}
});
app.listen(port, () => {
  console.log("running on port", port);
});

module.exports = app;
