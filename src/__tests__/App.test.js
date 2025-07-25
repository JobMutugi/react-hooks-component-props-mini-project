import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  render(<App />);
  
  // Check for the main App container
  const appElement = screen.getByTestId("app-container");
  expect(appElement).toBeInTheDocument();
  
  // Check for child components
  expect(screen.getByRole("banner")).toBeInTheDocument(); // Header
  expect(screen.getByRole("complementary")).toBeInTheDocument(); // About
  expect(screen.getByRole("main")).toBeInTheDocument(); // ArticleList
});

// Alternative version if you prefer using class names
test("renders the correct child components with class names", () => {
  const { container } = render(<App />);
  
  // Check for the main App container
  expect(container.querySelector(".App")).toBeInTheDocument();
  
  // Check for child components
  expect(container.querySelector("header")).toBeInTheDocument();
  expect(container.querySelector("aside")).toBeInTheDocument();
  expect(container.querySelector("main")).toBeInTheDocument();
});