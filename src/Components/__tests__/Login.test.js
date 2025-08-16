import Login from "../Login";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Login Page Test Cases", () => {
  it("Should load Login Component", () => {
    render(<Login />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load Button inside login Component", () => {
    render(<Login />);
    const button = screen.getByText("Login");
    expect(button).toBeInTheDocument();
  });
  it("Should load Input name inside login Component", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("Email address");
    //Assertion
    expect(input).toBeInTheDocument();
  });

  it("Should load two input boxes on the login component", () => {
    render(<Login />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
