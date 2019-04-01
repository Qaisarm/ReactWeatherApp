import React from "react";

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.autocomplete = null;
        this.autoCompleteInputValue = React.createRef();
        this.changeInPlace = this.changeInPlace.bind(this);
    }

 // Restricted to cities of Sweden
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            this.autoCompleteInputValue.current,
            {
                types: ['(cities)'],
                componentRestrictions: {country: 'se'}
            }
        );
        this.autocomplete.addListener("place_changed", this.changeInPlace);
    }
    
 // Handeling the Change in Place
    changeInPlace() {
        const place = this.autocomplete.getPlace();
        this.props.onPlaceChanged(place);
    }
    render() {
        return (     
                <div className="input" >  

                    <input type="search"
                        ref={this.autoCompleteInputValue}
                        placeholder="Enter a location to get weather forecast at current local time"
                        />
                </div>
        );
    }
}

export default InputBar;
