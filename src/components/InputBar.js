import React from "react";

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

 // Restrected to cities of Sweden
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            this.autocompleteInput.current,
            {
                types: ['(cities)'],
                componentRestrictions: {country: 'se'}
            }
        );

        this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    }

    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();

        this.props.onPlaceChanged(place);
    }

    render() {
        return (     
                <div className="input" >  
                    <input
                        ref={this.autocompleteInput}
                        id="autocomplete"
                        placeholder="Enter a location to get weather forecast at current local time"
                        type="search"/>

                </div>

        );
    }
}

export default InputBar;
