import { screen } from "@testing-library/react";
import App from "App";
import { render } from "utils/test-utils";

describe("Index", () => {
  test("render home", () => {
    render(<App />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
