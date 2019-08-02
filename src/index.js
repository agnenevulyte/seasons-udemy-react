import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

export default class App extends Component {
    // if we have a constructor function, we have to have (props)
    constructor(props) {
        // allways super(props);
        super(props);
        this.state = {
            lat: null,
            errorMessage: ""
        }

        window.navigator.geolocation.getCurrentPosition(
            // callbacks
            position => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            err => this.setState({
                errorMessage: err.message
            })
        );
    }
    


    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 
        
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Lattitude: {this.state.lat}</div>
        }
        
        return <div>Loading...</div>
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
