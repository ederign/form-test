import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";

import {
  AutoField,
  AutoForm,
  ErrorsField,
  SubmitField,
} from "uniforms-bootstrap4";
import { bridge as schema } from "./GuestSchema";

const Form = () => {
  return (
    <Container>
      <AutoForm schema={schema} onSubmit={console.log}>
        <h4>IT meeting guest questionnaire</h4>
        <AutoField name="lastName" />
        <AutoField name="firstName" />
        <AutoField name="username" />
        <AutoField name="password" />
        <AutoField name="bool" />
        <span>Do you want to share your work experience with us?</span>
        <AutoField name="workExperience" />
        <ErrorsField />
        <SubmitField />
      </AutoForm>
    </Container>
  );
};

export default Form;
