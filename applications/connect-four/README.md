# Connect Four Game

![Connect Four](https://github.com/kevinleet/connect-four/blob/main/screenshot.png?raw=true)

This is a simple implementation of the Connect Four game using HTML, JavaScript, and CSS. The game allows two players to take turns dropping colored discs into a grid and aims to connect four discs of the same color in a row, column, or diagonal.

## How to Play

1. Open the game in your web browser.
2. The red player always starts the game.
3. Click on one of the dropper controls at the top to drop a disc into the corresponding column.
4. The turn indicator displays which player's turn it is: red or yellow.
5. The game will automatically check for a winner after each move.
6. The first player to connect four discs of their color wins the game.
7. If there are no more moves available and no winner, the game ends in a draw.

## Controls

- Dropper Controls: Located at the top of the game board, these buttons represent each column. Click on a dropper control to drop a disc into the corresponding column.
- Play Again Button: After a game ends, you can click this button to reset the game and start a new round.

## Game Logic

The game logic is implemented using JavaScript. Here's an overview of the main functions:

- `render()`: Renders the dropper controls and game board, initializes the game state, and sets up event listeners for user interaction.
- `handleDrop(col)`: Handles the user's disc drop by finding the lowest available slot in the selected column and setting the color of the slot.
- `setColor(slot)`: Sets the color of the given slot based on the current player's turn and updates the turn indicator.
- `getWinner()`: Checks for a winner by examining the slots on the game board. It calls various helper functions to check for vertical, horizontal, and diagonal connections of four discs.
- `checkNoWinner()`: Checks if there are no more moves available on the board and ends the game in a draw if true.
- `checkVertical(value, row, col)`: Checks for a vertical connection of four discs of the same color starting from the specified slot.
- `checkHorizontal(value, row, col)`: Checks for a horizontal connection of four discs of the same color starting from the specified slot.
- `checkNE(value, row, col)`: Checks for a diagonal connection (Northeast direction) of four discs of the same color starting from the specified slot.
- `checkNW(value, row, col)`: Checks for a diagonal connection (Northwest direction) of four discs of the same color starting from the specified slot.

## Acknowledgments

This Connect Four game was created by Kevin Li. Feel free to use, modify, and distribute this code as you wish. Enjoy playing!
