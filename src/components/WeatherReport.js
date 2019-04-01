import React from "react";

const Location = (props) => {
    if(props.weatherLocation.length !== "undefined" && props.weatherLocation.length !== ""){
        return props.weatherLocation.slice(3, -1).map((objects,Key_id) =>{
            const validTime = new Date(objects.validTime);
            var temparature = objects.parameters.find( value => value.name === 't');
            var pressure = objects.parameters.find( value => value.name === 'msl');
            var humidity = objects.parameters.find( value => value.name === 'r');
            var imgNr = objects.parameters.find( value => value.name === 'Wsymb2');

             return(
                 <div key = {Key_id}>
                 <div className = "forcast_weather">
                    <h2> Weather Forcast on </h2>
                    <h3> {validTime.toUTCString()}</h3>
                    </div>
                    <p> <img src={`https://www.smhi.se/startpage/images/WPT-icons/weathersymbols/80x60/day/${imgNr.values[0]}.png?v=1545133432571&proxy=wpt-abc`} alt="weather-icon"/></p>
                    <p>Air Temperature : {temparature.values[0]} &deg;C </p><br/>
                    <p> Air Pressure  : {pressure.values[0]} hPa </p><br/>
                    <p>Humidity  : {humidity.values[0]} %</p>
                    <p>-----------------------------------------</p>
                    </div>
                )

        });
    } else
        {
            return null;
        }

};

class WeatherReport extends React.Component {

    render() {

            if(typeof this.props.onweatherLocation.length !== "undefined" && this.props.onweatherLocation.length !== ""){
                return (
                <div>
                    <Location weatherLocation={this.props.onweatherLocation}></Location>
                 </div>
                );
            }else
            {
                return null;
            }
    }
}

export default WeatherReport;
