# IP Weather API
This is a simple Node.js API that responds with a message including the client's IP address, location, and current temperature.

## Features
- Fetches the client's IP address and location.
- Fetches the current temperature based on the client's location.
- Responds with a personalized greeting message.

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/monyasau/ipWeatherApi.git
   cd ipWeatherApi
2. **Install the dependencies:**
   ```
   npm install
3. **Start the server:**
      ##### On Linux:
         sudo node index.js

      ##### On Windows:
         node index.js
4. **Access the API endpoint:**
         ``
         http://localhost/api/hello?visitor_name=YourName``
         

## Example:
   ##### Request:
            GET http://localhost/api/hello?visitor_name=lanre``    
   ##### RESPONSE:
             {
              	"client_ip": "105.112.76.35",
              	"location": "Manchester",
              	"greeting": "Hello lanre, the temperature is 13.1 degrees Celcius in Manchester, England"
             }
        
