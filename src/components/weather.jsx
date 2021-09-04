import React from "react";

const Weather = (props) => (
  <div className="list-group mt-3">
    {props.city && (
      <div className="input_container">
        <p className="border-bottom pb-1 mb-1">
          <strong>Местоположениe:</strong> {props.city}, {props.country}
        </p>
        <p className="border-bottom pb-1 mb-1">
          <strong>Время:</strong> {props.date}
        </p>
        <p className="border-bottom pb-1 mb-1">
          <strong>Температура:</strong> {props.temp}
        </p>
        <p className="border-bottom pb-1 mb-1">
          <strong>Давление:</strong> {props.pressure}
        </p>
        <p className="border-bottom pb-1 mb-1">
          <strong>Восход солнца:</strong> {props.sunrise}
        </p>
        <p className="mb-0">
          <strong>Заход солнца:</strong> {props.sunset}
        </p>
      </div>
    )}
    <p className="input_container d-none"> {props.error} </p>
  </div>
);
export default Weather;
