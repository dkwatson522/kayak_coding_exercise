import React from 'react';
import Airline from './Airline';

const AirlineList = ({airlines}) => {


  return (
    <div className='cards'>
    {airlines.map(airline => (
      <Airline key={airline.code} airline={airline} />
    ))}
    </div>
  );
}

export default AirlineList;
