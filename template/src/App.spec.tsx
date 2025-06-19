import { render, screen } from "@testing-library/react";
import App from "./App";

it("should to render hello world example", () => {
  render(<App />);
  const h1Element = screen.getByText("Hello, World!");
  expect(h1Element).toBeInTheDocument();
});
