import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomButton from "../src/components/CustomButton";

describe("CustomButton", () => {
  it("renders with title and handles press", () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <CustomButton title="Click Me" onPress={mockFn} />
    );

    const button = getByText("Click Me");

    fireEvent.press(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    const mockFn = jest.fn();

    const { getByText } = render(
      <CustomButton title="Disabled" onPress={mockFn} disabled />
    );

    fireEvent.press(getByText("Disabled"));

    expect(mockFn).not.toHaveBeenCalled();
  });
});
