import React from "react";

class PreviousYearData extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:{},
        isLoading:false};

    }
    // To fetch Old Data
    componentDidMount(){
        this.setState({isLoading:true});
        fetch('https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station.json')
            .then(response => response.json())
            .then(data => {console.log(data);
                let stationName = data.station.find( value => value.name === this.props.WeatherLocation.name);

                return fetch(`https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/${stationName.id}/period/latest-months/data.json`);

            })
        .then(function(response) {

            return response.json();
        })
            .then(data=> {
            console.log(data);
                this.setState({ data:data,
                isLoading:false});

        })
    }

    render() {

        // If the Data is Loading
        if(this.state.isLoading){
            return (
                <div><p>The Required Data is loading...</p></div>
            );

        }

        if(typeof this.state.data.value!=="undefined" && this.state.data.value.length > 0 ){

            return this.state.data.value.slice(0, 80).map((objects, Key_id) => {
                let validTime = new Date(objects.date);
                let temparature = objects.value;

                return(
                    <div key={Key_id}>
                    <h4>Previous Year Temperature on </h4>
                        <p>Date & Time: {validTime.toUTCString()}</p>
                        <p>Air Temparature: {temparature} &deg;C</p>
                        <p>--------------------------------------------</p>
                    </div>
                );

            });
        }else {
            return null;
        }

    }

}

 const PreviousYear = (props)=> {
         if(typeof props.onweatherLocation !== "undefined" && props.onweatherLocation !== ""){
             return (
                 <div>
                     <h2>Temperature Data from Previous Year</h2>
                         <br/>
                         <PreviousYearData WeatherLocation={props.onweatherLocation}></PreviousYearData>
                 </div>
             );
         }else{
             return null;
         }

};
export default PreviousYear;