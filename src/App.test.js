import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "jest-canvas-mock";

test("renders app component", () => {
  render(<App />);
  const titleElement = screen.getByTestId("title");
  expect(titleElement).toBeInTheDocument();

  const canvasElement = screen.getByTestId("canvas");
  expect(canvasElement).toBeInTheDocument();

  const repeatButton = screen.getByTestId("repeat-button");
  expect(repeatButton).toBeInTheDocument();

  const coverageButton = screen.getByTestId("coverage-button");
  expect(coverageButton).toBeInTheDocument();
});
