const puzzle = [
  [2, 8, 3],
  [1, 6, 4],
  [7, 9, 5],
];

const desiredState = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

function getIndexOnPuzzle(number = 9) {
  let i = 0;
  let j = -1;

  puzzle.forEach((arr, rowIndex) => {
    if (arr.includes(number)) {
      j = arr.indexOf(number);
      i = rowIndex;
    }
  });

  return [i, j];
}

function getIndexOnDesiredState(number = 9) {
  let i = 0;
  let j = -1;

  desiredState.forEach((arr, rowIndex) => {
    if (arr.includes(number)) {
      j = arr.indexOf(number);
      i = rowIndex;
    }
  });

  return [i, j];
}

function moveUp() {
  const [i, j] = getIndexOnPuzzle(9);
  if (i == 1 || i == 2) {
    const temp = puzzle[i - 1][j];
    puzzle[i - 1][j] = 9;
    puzzle[i][j] = temp;
  }
}

function moveDown() {
  const [i, j] = getIndexOnPuzzle(9);
  if (i == 0 || i == 1) {
    const temp = puzzle[i + 1][j];
    puzzle[i + 1][j] = 9;
    puzzle[i][j] = temp;
  }
}

function moveRight() {
  const [i, j] = getIndexOnPuzzle(9);
  if (j == 0 || j == 1) {
    const temp = puzzle[i][j + 1];
    puzzle[i][j + 1] = 9;
    puzzle[i][j] = temp;
  }
}

function moveLeft() {
  const [i, j] = getIndexOnPuzzle(9);
  if (j == 1 || j == 2) {
    const temp = puzzle[i][j - 1];
    puzzle[i][j - 1] = 9;
    puzzle[i][j] = temp;
  }
}

function calculateManhattanDistance() {
  let dist = 0;
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      const el = puzzle[i][j];
      const [a, b] = getIndexOnDesiredState(el);
      dist += Math.abs(a - i) + Math.abs(b - j);
    }
  }
  return dist;
}

function availableMoves() {
  const [i, j] = getIndexOnPuzzle(9);
  let resMoves = new Set();
  if (i > 0) {
    resMoves.add("up");
  }
  if (i < 2) {
    resMoves.add("down");
  }
  if (j > 0) {
    resMoves.add("left");
  }
  if (j < 2) {
    resMoves.add("right");
  }
  return resMoves;
}

function move(direction) {
  direction == "up" && moveUp();
  direction == "down" && moveDown();
  direction == "right" && moveRight();
  direction == "left" && moveLeft();
}

function revertMove(direction) {
  direction == "down" && moveUp();
  direction == "up" && moveDown();
  direction == "left" && moveRight();
  direction == "right" && moveLeft();
}

function bestMove(moves) {
  const res = new Map();
  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves[i];
    move(currentMove);

    const mhd = calculateManhattanDistance();
    res.set(currentMove, mhd);

    revertMove(currentMove);
  }

  // const leastM = (Array.from(res.values()).sort())[0]
  const minDistance = Math.min(...res.values()); // better approach
  const bestMoves = Array.from(res.entries())
    .filter(([move, mhd]) => mhd === minDistance)
    .map(([move, mhd]) => move);

  return bestMoves;
}

function main() {
  let steps = 0;
  let previousMove = null;
  let stepLimit = 100;  

  while (calculateManhattanDistance() !== 0 && steps < stepLimit) {
    const available = Array.from(availableMoves());

    const validMoves = available.filter((move) => {
      if (previousMove === "up" && move === "down") return false;
      if (previousMove === "down" && move === "up") return false;
      if (previousMove === "left" && move === "right") return false;
      if (previousMove === "right" && move === "left") return false;
      return true;
    });

    const best = bestMove(validMoves)[0];

    move(best);

    console.log(`Step ${++steps}: Moved ${best}`);
    console.table(puzzle); 

    previousMove = best;
  }

  if (calculateManhattanDistance() === 0) {
    console.log(`Puzzle solved in ${steps} steps!`);
  } else {
    console.log(`Step limit reached! Puzzle not solved.`);
  }
}

main();
