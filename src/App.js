// import Hello from './components/Hello';
import './App.css';
import Flat from './components/flat';
// import { render } from '@testing-library/react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker';

class App extends Component {

  constructor(props){
    super (props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
  const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
  fetch (url)
   .then(response => response.json())
   .then((data) => {
    this.setState({
      flats: data,
      selectedFlat: null
    });
  })
  }

  selectFlat =(flat) =>{
    this.setState({
      selectedFlat: flat
    })
  }

  render() {

    let center = {
      lat : 48.8566,
      lng : 2.3522,
    }

    if (this.state.selectedFlat) {
      center = {
       lat : this.state.selectedFlat.lat,
       lng : this.state.selectedFlat.lng

      }
    }

    return (
      <div className="App">
        <div className="main">
          <div className="searchbar">
          </div>
            <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat key={flat.name} flat={flat}
              selectFlat = {this.selectFlat}/>
            })}
            </div>
        </div>
        <div className="map">
            < GoogleMapReact
              center={center}
              zoom={11}>
              {this.state.flats.map((flat) => {
              return <Marker
                key={flat.name}
                lat={flat.lat}
                lng={flat.lng}
                text={flat.price}
                selected ={flat === this.state.selectedFlat}/>
              })}
            </GoogleMapReact>
        </div>
      </div>
    );
  };
}

export default App;
