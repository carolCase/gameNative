import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
/**
 * @description en call back funtion som testar om det finns 2 barn
 * i app.js ,vilket är : stackScreen Home och stackScreen Game
 */
describe("<App />", () => {
  it("has 2 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
