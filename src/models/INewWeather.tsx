
export interface INewWeather {
    location: Location
    forecast: Forecast
  }
  
  export interface Location {
    name: string
  }
  
  export interface Forecast {
    forecastday: Forecastday[]
  }
  
  export interface Forecastday {
    date: string
    date_epoch: number
    day: Day
  }
  
  export interface Day {
    avgtemp_c: number
  }
  