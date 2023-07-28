import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherCard } from './components/WeatherCard';
import jsonData from './sampleData.json';
import { Dropdown } from './components/Dropdown';
import { Console } from 'console';
import { INewWeather } from './models/INewWeather';

const locations = ['Bangalore','Chennai',"Mumbai",'Kochi'];

// Sunday - Saturday : 0 - 6
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];

function App() {

  const[apiData, setapiData] = useState('');
  const[selected, setSelected] = useState(locations[0]);
  const[weatherData, setWeather] = useState({} as INewWeather)


  useEffect(() => {
    (async () => {
      let jsonData = await getWeatherDetails(selected) as INewWeather;
      const jsonData1: INewWeather = await jsonData; 
      setWeather(jsonData1);
  })();

  },[selected]);


  return (
    <div> 
      <h1 className='textCenter'>Weather App</h1>

      <h3 className='textCenter'>Please select the city below:</h3>
      
      <div style={{display:'flex', justifyContent:'center', marginBottom:'200px'}}>
        <Dropdown optionItems={locations} selected={selected}  setSelected={setSelected}/>
      </div>

      <div className="flex-container">
      
      {weatherData?.forecast?.forecastday.map((value, index) => <WeatherCard day={dayNames[new Date(value.date).getDay()]} 
                                            temp={value.day.avgtemp_c} 
                                            nextDay = { new Date(value.date).getDay() === 6 ? 'Sunday' : dayNames[new Date(value.date).getDay()+1]}
                                            nextDayTemp = {index === 6 ? weatherData?.forecast?.forecastday[0].day.avgtemp_c : weatherData?.forecast?.forecastday[index+1].day.avgtemp_c}/>)}

      </div>
      <h4 className='textCenter'>This week weather forcast for {selected} location</h4>

      </div>
  );
  
}

export default App;

async function getWeatherDetails(location: string){
  try{
    const response = await fetch(`${process.env.REACT_APP_WEATHER_BASE_URL}v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=7&aqi=no&alerts=no`);
    const responseData = await response.json();
    return responseData;
  }
  catch (error) {
    console.log('There was an error', error);
  }
}