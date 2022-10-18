import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button Test", () => {
  test("render Button component", () => {
    const handleClick = jest.fn();

    // https://testing-library.com/docs/react-testing-library/api/#asfragment
    // asFragment returns a DocumentFragment of rendered component. This can be useful if you need to avoid live bindings and see how your component reacts to events.

    const { asFragment } = render(
      <Button onClick={handleClick}>Button</Button>
    );

    // Snapshot testing: https://jestjs.io/docs/snapshot-testing
    expect(asFragment()).toMatchSnapshot();
  });
});
