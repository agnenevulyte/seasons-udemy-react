import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

export default class App extends Component {
    
    state = {
        lat: null,
        errorMessage:  ""
    }

    // initial data loading
    componentDidMount() {
        // console.log('my component was rendered to the screen')
        window.navigator.geolocation.getCurrentPosition(
            // callbacks
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }


    // data loading when state/props change
    componentDidUpdate() {
        // console.log('component was updated and rerendered')
    }


    // used to do a cleanup (especially for non-react stuff)
    componentWillUnmount() {

    }


    // React says we have to define render!!
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        } 
        
        if (!this.state.errorMessage && this.state.lat) {
            // pass props
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div>Loading...</div>
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
