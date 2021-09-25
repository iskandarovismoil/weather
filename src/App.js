import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import Lottie from "react-lottie";
import Success_animation from "./animations/success.json";
import Error_animation from "./animations/error.json";

const API_KEY = "2dcde87f83fe2233e9fa50e70c582c88";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=2dcde87f83fe2233e9fa50e70c582c88&units=metric";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    date: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
    animationData: undefined,
    showWeather: undefined
  };

  getTime(time) {
    var date = new Date();
    date.setTime(time * 1000);
    return date.getHours() + ":" + date.getMinutes();
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    this.setState({
      showWeather: undefined,
    });

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      
      if (data.cod == '404') {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          date: undefined,
          pressure: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Город не найден !",
          animationData: Error_animation,
        });
      }
      else
      {
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          date: this.getTime(data.dt),
          pressure: data.main.pressure,
          sunrise: this.getTime(data.sys.sunrise),
          sunset: this.getTime(data.sys.sunset),
          error: undefined,
          animationData: Success_animation,
        });
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        date: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Вы не ввели название города !",
        animationData: Error_animation,
      });
    }
  };

  render() {

    const options = {
      animationData: this.state.animationData,
      loop: false,
      autoplay: true,
      isStopped: true,
      isPaused: false,
    };

    const defaultEvent = {
      eventName: 'complete',
      callback: () => {
        this.setState({
          animationData: undefined,
          showWeather: true,
        });
      },
    };

    if(this.state.showWeather){
      var weather = (
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
      )
    }

    return (
      <div className="wrapper">
        {this.state.animationData &&
          <div className="modal_animation d-flex align-items-center justify-content-center">
            <Lottie
              options={options}
              height={400}
              width={400}
              isClickToPauseDisabled
              eventListeners={[defaultEvent]}
            />
          </div>
        }
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="main col-sm-8 col-xl-6 ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 info pt-4 p-md-0">
                <Info />
              </div>
              <div className="col-md-6 form">
                <Form weatherMethod={this.getWeather} />
                { weather }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
