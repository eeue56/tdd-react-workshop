import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const root = screen.getByText("Hello world");
  expect(root).toBeInTheDocument();
});

test("matches the base snapshot", () => {
  const tree = render(<App />).asFragment();
  expect(tree).toMatchSnapshot();
});
