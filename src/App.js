import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Filter from './components/Filter';
import AirlineList from './components/AirlineList';
import fetchJsonp from 'fetch-jsonp';

function App() {
  const [allianceFilters, setAllianceFilters] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [filteredAirlines, setFilteredAirlines] = useState([]);


  useEffect(() => {
    fetchJsonp('http://kayak.com/h/mobileapis/directory/airlines/homework',  { jsonpCallback: 'jsonp'})
    .then(res => res.json())
    .then(data => {
      const allianceInScope = data.filter(airline => airline.alliance === 'ST' || airline.alliance === 'OW' || airline.alliance === 'SA')
      setAirlines(allianceInScope)
    })
    .catch(error => {});
  }, [])

  useEffect(() => {
        setFilteredAirlines(airlines.filter((airline) => allianceFilters.includes(airline.alliance)));
  }, [airlines, allianceFilters])

  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setAllianceFilters([...allianceFilters, e.target.value])
    } else {
      const newArr = allianceFilters.filter((alliance) => alliance !== e.target.value);
      setAllianceFilters(newArr);
    }
  }

  return (
    <div className="App">
      <Navigation/>
      <div className='container'>
        <Header/>
        <Filter
          allianceFilters={allianceFilters}
          handleFilterChange={handleFilterChange}
        />
        {allianceFilters.length === 0 && <AirlineList airlines={airlines}/>}
        {allianceFilters.length > 0 && <AirlineList airlines={filteredAirlines}/>}
      </div>
    </div>
  );
}

export default App;
