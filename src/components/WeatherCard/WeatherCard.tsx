import React, { Component } from 'react';
import RainLogo from './rainCloud.png'
import { Day } from '../../models/INewWeather';
import './WeatherCardStyles.css'

export function WeatherCard({day,temp,nextDay,nextDayTemp}: any)
{
  return(
        <div className="flex-container" style={{background: temp >= 23 ? 'linear-gradient(0deg, #5f24b2 10%, #fde197 59%, #d674ae 90%)' : 'linear-gradient(0deg, #1c2f76 10%, #70c1f9 59%, #4e73ce 90%)'}} >
            <div style={{display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'center'}}>
            <label style={{fontSize:'50px'}}>{temp}°</label>
            <label style={{fontSize:15}}>{day}</label>
            </div>
            <img style={{height:'35px', width:'35px', position:'absolute', left:30, top:40, backgroundColor: temp >= 23 ? '' : 'white', borderRadius:'50%', boxShadow: temp >= 23 ? '' : '5px 0px 40px 10px #0ff'}}/>

            <img className="nextDayImg" src={RainLogo} alt="Logo"/>
            <label className="nextDayTemp">{nextDayTemp}°</label>
            <label className="nextDay">{nextDay}</label>
    </div>
  )
}
