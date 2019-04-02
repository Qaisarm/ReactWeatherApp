import React from "react";


const Location = (props) => {
  
  if( props.weatherLocation.place.length !== "undefined" && props.weatherLocation.place.length !== ""){
    return props.weatherLocation.place.slice(0, 1).map(
      (objects,Key_id) =>{
      const validTime = new Date(objects.validTime);
      var temparature = objects.parameters.find( value => value.name === 't');
      var pressure = objects.parameters.find( value => value.name === 'msl');
      var humidity = objects.parameters.find( value => value.name === 'r');
      var imgNr = objects.parameters.find( value => value.name === 'Wsymb2');

      return(

        <div key = {Key_id}>

        <div className = "current_weather_header">
        <h2> Today's Weather</h2>
        <h4> at </h4>
        <h3> {props.weatherLocation.latlong.name}</h3>
        </div>
        <div className = "header-body">
        <p> {validTime.toDateString()}</p><br/>
        <p> <img src={`https://www.smhi.se/startpage/images/WPT-icons/weathersymbols/80x60/day/${imgNr.values[0]}.png?v=1545133432571&proxy=wpt-abc`} alt="weather-icon"/></p><br/>
        <p>Air Temperature : {temparature.values[0]} &deg;C </p><br/>
        <p> Air Pressure  : {pressure.values[0]} hPa </p><br/>
        <p>Humidity  : {humidity.values[0]} %</p>
        </div>

        </div>

      )

    }
  );
}else{
  return null;
}

};

class CurrentWeather extends React.Component {

  render() {
    if(typeof this.props.onweatherLocation.place.length !== "undefined"
     && this.props.onweatherLocation.place.length !== "")
     {
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

export default CurrentWeather;
