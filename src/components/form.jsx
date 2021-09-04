import React from "react";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

const Form = (props) => (
  <div className="input_container">
    <form onSubmit={props.weatherMethod}>
      <MDBInput
        label="Напишите имя города"
        name="city"
        icon="envelope"
        type="text"
      />
      <MDBBtn className="col-12 mt-2">Получить погоду</MDBBtn>
    </form>
  </div>
);

export default Form;
