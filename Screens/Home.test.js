import React from "react";

import Game from "./Game";
/**
 * @description testar om den navigerar till Game när man
 * pressar på knappen. Alltså om den renderar Game.jsx .
 *
 */
describe("Game", () => {
  it('should navigate to "Game" on button press', () => {
    const { getByTestId } = render(<Game />);

    const button = getByTestId("Welcome warrior");

    fireEvent.press(button);

    expect(navigation.navigate).toHaveBeenCalledWith("Game");
  });
});
