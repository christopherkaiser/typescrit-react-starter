// src/components/Hello.test.tsx

import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "./Hello";

it("renders the correct text when no enthusiasm level is given", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm of 1", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm level of 5", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!!!!");
});

it("throws when the enthusiasm level is 0", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it("throws when the enthusiasm level is negative", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});

it("calls onDecrement when decrementBtn is pressed", () => {
  const decFunction = jest.fn();
  const hello = enzyme.shallow(
    <Hello name="Daniel" onDecrement={decFunction} />
  );
  hello.find(".decrementBtn").simulate("click");
  expect(decFunction).toBeCalled();
});

it("calls onIncrement when incrementBtn is pressed", () => {
  const incFunction = jest.fn();
  const hello = enzyme.shallow(
    <Hello name="Daniel" onIncrement={incFunction} />
  );
  hello.find(".incrementBtn").simulate("click");
  expect(incFunction).toBeCalled();
});
