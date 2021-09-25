import React from "react";

const Weather = (props) => (
  <div className="list-group">
    {props.city && (
      <div className="input_container weather animate__animated animate__zoomIn">
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
    {props.error != undefined && (
      <p className="input_container weather mb-0 animate__animated animate__zoomIn"><strong> {props.error} </strong></p>
    )}
  </div>
);
export default Weather;
