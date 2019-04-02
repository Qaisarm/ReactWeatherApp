# ReactWeatherApp
A plain front end application built on the latest version of React using Babel and Webpack.
The application has a autocomplete input to look for cities in Sweden only.

 When a Place is chosen, the API from Swedish Meteorological and Hydrological Institute (SMHIs) (http://opendata.smhi.se/apidocs/) is queried and the current weather, a forecast for next 10 days and a comparison to last years data is shown.

Some simple unit tests are also included.

Steps to start and test the application.

To Start:

Step 1: Clone the repository from https://github.com/Qaisarm/ReactWeatherApp.git

Step 2: Install node-Modules to run the application using

        npm i or npm install
 
Step 3: To start the application 

        npm start
        
  A new browser window will open at  http://localhost:8080/
  
  To see the Weather details, type city names of Sweden.
  
  To Test:
  
  Some Simple Tests are written using jest.
  
  To Run the tests type in console.
  
     npm test
  
  
        


