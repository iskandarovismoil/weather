import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
                { this.props.city &&
                    <div>
                        <p>Местоположениe: {this.props.city}, {this.props.country}</p>
                        <p>Дата: {this.props.date}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Давление: {this.props.pressure}</p>
                        <p>Восход солнца: {this.props.sunrise}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
            </div> 
        );
    }
}

export default Weather;