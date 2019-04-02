import React from "react";
import {Container, Row, Col} from "react-grid-system";
import Title from "./components/Title";
import InputBar from "./components/InputBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherReport from "./components/WeatherReport";
import PreviousYear from "./components/PreviousYear";
import "./App.css";


class App extends React.Component {
    state = {
        place: {}
    };

    // To get data from SMHI API
    getWeather(coords) {
        // To get a meteorological forecast at a point
        const URL = ' https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point';
        let fetching = false;

        if (fetching) return Promise.reject('Request to fetch data is in progress');
        fetching = true;
        return fetch(URL + `/lon/${coords.lng.toFixed(2)}/lat/${coords.lat.toFixed(2)}/data.json`)
            .then(dataWrappedByPromise => dataWrappedByPromise.json())
            .then((data) => {
                fetching = false;
                return (data);
            })
         // Error Handeling
            .catch(e => {
                console.log("error handeling data:", e.message);
                fetching = false;
                return Promise.reject(e); 
            })

    }
    // To get coordinates of Address
    getAddress(place) {
        let address_coords = {};
        address_coords['name'] = place.name;
        if(typeof place.geometry !== "undefined" && place.geometry !== ""){
            address_coords['lat'] = place.geometry.location.lat();
            address_coords['lng'] = place.geometry.location.lng();
            return address_coords;
        }else 
         return;
    }

    showAddressDetail(place) {

        let coords = this.getAddress(place);

        if(typeof coords !== "undefined" && typeof coords !== "undefined") {
            this.getWeather(coords).then(data => {
                this.setState({place: data.timeSeries,
                    latlong:coords,
                    error_message: ""});
            });
        } else this.setState({error_message: "Please enter the city name of Sweden"});
    }

    render() {
        return (
            <div className="page">
                <Title/>
                <InputBar onPlaceChanged={this.showAddressDetail.bind(this)}/>
                <div className="err_message">
                <label>{this.state.error_message}</label>
                </div>
                <br/>
                <div className="current_weather ">
                <Container fluid style={{ lineHeight: '8px' }}>
                  <Row justify="around" debug>
                    <Col xs={4} debug>
                    <CurrentWeather onweatherLocation={this.state}/>
                    </Col>
                  </Row>
                </Container>                
                </div>
                <br/>
                <div className="weather_report">
                <Container fluid style={{ lineHeight: '8px' }}>
                  <Row justify="around" debug>
                    <Col xs={4} debug>
                    <WeatherReport onweatherLocation={this.state.place}/>
                    </Col>
                    <Col xs={4} debug>
                    <PreviousYear onweatherLocation={this.state.latlong}/>
                    </Col>
                  </Row>
                </Container>   
                             
                </div>
            </div>
        );
    }
}

export default App;
