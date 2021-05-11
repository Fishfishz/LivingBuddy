import React from "react";
import { getByTestId, render } from "@testing-library/react";
import Dashboard from "../views/Dashboard/Dashboard";
import "@testing-library/jest-dom";

test("renders learn react link", () => {
  render(<Dashboard />);
  expect(getByTestId(document.documentElement, "t1")).toBeInTheDocument();
});
