import React from 'React';
import Flat from './flat.css';

class Flat extends React.Component{
  render(){
    const title = PRICE + NAME;

    return(
      <div className="flat">
        <div className="flat-picture"></div>
        <div className="flat-title"></div>
        {title}
      </div>
    );
  }
}

export default Flat;
