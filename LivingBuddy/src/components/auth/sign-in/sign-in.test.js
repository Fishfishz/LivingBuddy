import React from "react";
import {cleanup, getByTestId, render} from "@testing-library/react";
import SignIn from "./sign-in";
import "@testing-library/jest-dom/extend-expect";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test("CheckboxWithLabel changes the text after click", () => {
  render(<SignIn />);
  expect(getByTestId(document.documentElement, "t1")).toBeInTheDocument();
});
