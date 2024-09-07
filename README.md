# Hill Climbing Algorithm Implementation 🏔️

Welcome to the Hill Climbing Algorithm implementation for solving a sliding puzzle! This README will guide you through the functionality of the code, how to run it, and what you can expect from it. Let's dive in! 🚀

## Overview

This code implements a simple Hill Climbing Algorithm to solve a 3x3 sliding puzzle. The goal is to rearrange the numbers in the puzzle to reach a desired state using the least number of moves. The algorithm uses the Manhattan distance heuristic to evaluate the best moves at each step.

## Puzzle Representation

The puzzle is represented as a two-dimensional array:

```javascript
const puzzle = [
  [2, 8, 3],
  [1, 6, 4],
  [7, 9, 5],
];
```

The desired state of the puzzle is:

```javascript
const desiredState = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
```

### Key Functions

- **getIndexOnPuzzle(number)**: Returns the current index of a number in the puzzle.
- **getIndexOnDesiredState(number)**: Returns the index of a number in the desired state.
- **moveUp(), moveDown(), moveLeft(), moveRight()**: Functions to move the empty space (represented by `9`) in the puzzle.
- **calculateManhattanDistance()**: Calculates the total Manhattan distance for the current puzzle state compared to the desired state.
- **availableMoves()**: Returns a set of valid moves that can be made from the current position of the empty space.
- **move(direction)**: Executes a move in the specified direction.
- **revertMove(direction)**: Reverts the last move made.
- **bestMove(moves)**: Determines the best move by evaluating the Manhattan distance for each possible move.
- **main()**: The main function that runs the algorithm, attempting to solve the puzzle within a step limit.

## How to Run the Code

1. **Setup**: Make sure you have a JavaScript runtime environment (like Node.js) installed on your machine.
2. **Create a File**: Copy the code into a new file named `hillClimbingPuzzle.js`.
3. **Run the Code**: Open your terminal and run the following command:

   ```bash
   node hillClimbingPuzzle.js
   ```

4. **Observe the Output**: The console will display the steps taken to solve the puzzle, along with the state of the puzzle after each move.

## Example Output

When you run the code, you might see output like this:

```
Step 1: Moved down
┌─────┬─────┬─────┐
│  2  │  8  │  3  │
├─────┼─────┼─────┤
│  1  │  6  │  4  │
├─────┼─────┼─────┤
│  7  │  5  │  9  │
└─────┴─────┴─────┘
...
Puzzle solved in 10 steps!
```

## Limitations

- The algorithm is limited to a maximum of 100 steps to prevent infinite loops in unsolvable puzzles.
- The current implementation only considers the Manhattan distance heuristic, which may not always guarantee the optimal solution.

## Contributing 🤝

Feel free to contribute to this project by suggesting improvements or adding new features! Just fork the repository and submit a pull request.

## License

This project is open-source and available under the MIT License.
