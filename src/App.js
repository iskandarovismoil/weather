import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '2dcde87f83fe2233e9fa50e70c582c88';

const url = "https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=2dcde87f83fe2233e9fa50e70c582c88&units=metric";

class App extends React.Component{
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    date: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getTime(time){
    var date = new Date();
    date.setTime(time);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
  
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        date: this.getTime(data.dt),
        pressure: data.main.pressure,
        sunrise: this.getTime(data.sys.sunrise),
        sunset: this.getTime(data.sys.sunset),
        error: ""
      });
    }
  }

  render(){
    return(
      <div>
        <Info />
        <Form weatherMethod={this.getWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          date={this.state.date}
          pressure={this.state.pressure}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }

}

export default App;
