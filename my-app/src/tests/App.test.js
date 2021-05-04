import '@testing-library/jest-dom'
import React from 'react';
import {getByTestId, render} from "@testing-library/react";
import App from "../App";
import firebase from "firebase";

test('renders learn react link', () => {
  render(
      <App/>
  );
  expect(
      getByTestId(document.documentElement, 't1')
  ).toBeInTheDocument()
});
