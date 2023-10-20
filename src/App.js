// import Hello from './components/Hello';
import './App.css';
import Flat from './components/flat';
// import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  render() {

    const flat= {
      "id": 201,
      "name": "Super 60m2 in trendy neighborhood!",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
      "price": 150,
      "priceCurrency": "EUR",
      "lat": 48.885312,
      "lng": 2.341225
    }

    return (
      <div className="App">
        <Flat flat={flat}/>
      </div>
    );
  };
}

export default App;
