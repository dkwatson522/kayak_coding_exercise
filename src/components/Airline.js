import React from 'react';

const Airline = ({ airline }) => {

  const alias = (a) => {
    if (a === 'ST') {
      return a = 'Sky Team'
    } else if (a === 'SA') {
      return a = 'Star Alliance'
    } else if (a === 'OW') {
       return a = 'Oneworld'
    }
  }

  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img
            className='card-image'
            src={`https://content.r9cdn.net/${airline.logoURL}`}
            alt='Logo'
          />
          <div className='card-front-name'>
            {airline.name}
          </div>
        </div>
        <div className='card-back'>
          <img
            className='card-image'
            src={`https://content.r9cdn.net/${airline.logoURL}`}
            alt='Logo'
          />
          <div className='card-back-info'>
            <p className='card-back-name'>
              {airline.name}
            </p>
            <p className='card-back-alliance'>
              {alias(airline.alliance)}
            </p>
            <p className='card-back-phone'>
              {airline.phone}
            </p>
            <p className='card-back-site'>
              {airline.site}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airline;
