import React from "react";

import {
  AutoField,
  AutoForm,
  ErrorsField,
  SubmitField,
} from "uniforms-bootstrap4";
import { bridge as schema } from "./GuestSchema";

const Form = () => {
  return (
    <AutoForm schema={schema} onSubmit={console.log}>
      <div className="wrapper">
        <div className="box a">
          <AutoField name="firstName" />
        </div>
        <div className="box b">
          <AutoField name="lastName" />
        </div>
        <div className="box c">
          <AutoField name="workExperience" />
        </div>
        <div className="box d">
          <div className="box e">User credentials</div>
          <div className="box f">
            <AutoField name="username" />
          </div>
          <div className="box g">
            <AutoField name="password" />
          </div>
        </div>
      </div>
      <ErrorsField />
      <SubmitField />
    </AutoForm>
  );
};

export default Form;
