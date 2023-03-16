# Test Driven Development with React

# The project

We are going to build a loading screen in React.

## Setup

Clone this repo and run `npm install`. We will use Jest with [testing-library](https://testing-library.com/docs/react-testing-library/example-intro/).

Run `npm run test` to run the test runner.

## Basic React component

Create a React component which will display the words "Waiting for user input" until it is clicked on. When it is clicked on, it should say "Welcome".

Add a test for this behaviour.

```typescript
test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Fetch url="/greeting" />);

  // ACT
  await userEvent.click(screen.getByText("Load Greeting"));
  await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
```

## Write a snapshot test

```typescript
test("matches the base snapshot", () => {
  const tree = render(<App />).asFragment();
  expect(tree).toMatchSnapshot();
});
```

Take a look at the contents of the snapshot.

## Add a backend

Create a backend endpoint that will just serve

```json
{ "firstName": "Noah", "surname": "Hall" }
```

Modify the component to fetch the user details when clicked on. Once the JSON has been fetched, display the user's name.

## Delay the backend

Add an aritifical delay between the request and the response, on the server.

## Mock the backend

```typescript
const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);
```

Use an endpoint mocker to serve the example JSON without needing to have a server running.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
