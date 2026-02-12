//This variable gets our body element.
const body = document.getElementById('body');

//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
  //This condition ensures a square hasn't been selected already.
  //The .some() method is used to check each element of the selectedSquares array
  //to see if it contains the square number clicked on.
  if (!selectedSquares.some(element => element.includes(squareNumber))) {

    //This variable retrieves the HTML element id that was clicked.
    let select = document.getElementById(squareNumber);

    //This plays a sound each time a square is selected.
    audio('./media/place.mp3');

    //This condition checks who's turn it is.
    if (activePlayer === 'X') {
      //IMPORTANT: your file is images/x.png (lowercase)
      select.style.backgroundImage = 'url("images/x.png")';
    } else {
      //IMPORTANT: your file is images/o.png (lowercase)
      select.style.backgroundImage = 'url("images/o.png")';
    }

    //squareNumber and activePlayer are concatenated together and added to array.
    selectedSquares.push(squareNumber + activePlayer);

    //This calls a function to check for any win conditions.
    checkWinConditions();

    //This condition is for changing the active player.
    if (activePlayer === 'X') {
      activePlayer = 'O';
    } else {
      activePlayer = 'X';
    }
  }
}

//This function checks for every possible win condition of X or O.
function checkWinConditions() {

  // X 0, 1, 2 condition.
  if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
  // X 3, 4, 5 condition.
  else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
  // X 6, 7, 8 condition.
  else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
  // X 0, 3, 6 condition.
  else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
  // X 1, 4, 7 condition.
  else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
  // X 2, 5, 8 condition.
  else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
  // X 6, 4, 2 condition (diagonal right-to-left).
  else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
  // X 0, 4, 8 condition (diagonal left-to-right).
  else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }

  // O 0, 1, 2 condition.
  else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
  // O 3, 4, 5 condition.
  else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
  // O 6, 7, 8 condition.
  else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
  // O 0, 3, 6 condition.
  else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
  // O 1, 4, 7 condition.
  else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
  // O 2, 5, 8 condition.
  else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
  // O 6, 4, 2 condition (diagonal right-to-left).
  else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
  // O 0, 4, 8 condition (diagonal left-to-right).
  else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }

  //Tie condition: if 9 squares are selected and no win was found.
  else if (selectedSquares.length >= 9) {
    audio('./media/tie.mp3');
    setTimeout(function () { resetGame(); }, 500);
  }
}

//This function checks if all 3 values exist in the selectedSquares array.
function arrayIncludes(squareA, squareB, squareC) {
  return (
    selectedSquares.includes(squareA) &&
    selectedSquares.includes(squareB) &&
    selectedSquares.includes(squareC)
  );
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  //This line accesses our HTML canvas element.
  const canvas = document.getElementById('win-lines');
  //This line gives us access to methods and properties to use on canvas.
  const c = canvas.getContext('2d');
  //This line indicates where the start of a lines x axis is.
  let x1 = coordX1,
    //This line indicates where the start of a lines y axis is.
    y1 = coordY1,
    //This line indicates where the end of a lines x axis is.
    x2 = coordX2,
    //This line indicates where the end of a lines y axis is.
    y2 = coordY2,
    //This variable stores temporary x axis data we update in our animation loop.
    x = x1,
    //This variable stores temporary y axis data we update in our animation loop.
    y = y1;

  //This function is called in the loop below.
  function animateLineDrawing() {
    //This variable creates a loop that updates x and y.
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //This line clears our canvas.
    c.clearRect(0, 0, 608, 608);
    //This line creates a new line.
    c.beginPath();
    //This line sets the start point of our line.
    c.moveTo(x1, y1);
    //This line sets the end point of our line.
    c.lineTo(x, y);
    //This line sets the line color.
    c.strokeStyle = 'red';
    //This line sets the line width.
    c.lineWidth = 10;
    //This line draws our line.
    c.stroke();

    //These lines move x and y until the line reaches the end coordinates.
    if (x < x2) { x += 10; }
    if (y < y2) { y += 10; }
    //This second if statement is needed for the 6, 4, and 2 diagonal win line.
    if (x > x2) { x -= 10; }
    if (y > y2) { y -= 10; }

    //This stops the loop once the line has reached the end point.
    if (x === x2 && y === y2) {
      cancelAnimationFrame(animationLoop);
      //This plays the win sound.
      audio('./media/win.mp3');
      //This makes the body temporarily unclickable.
      disableClick();
      //This resets the game after the win line is drawn.
      setTimeout(function () { resetGame(); }, 1000);
    }
  }

  //This calls the function above to start drawing.
  animateLineDrawing();
}

//This function makes our body element temporarily unclickable.
function disableClick() {
  //This makes our body unclickable.
  body.style.pointerEvents = 'none';
  //This makes our body clickable again after 1 second.
  setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//This function takes a string parameter of the path you set earlier for sounds.
function audio(audioURL) {
  //We create a new audio object and we pass the path as a parameter.
  let audio = new Audio(audioURL);
  //Play method plays our audio sound.
  audio.play();
}

//This function resets the game in case of a tie or a win.
function resetGame() {
  //This is the delay before the reset happens.
  setTimeout(function () {
    //This line loops through all of our squares and removes the background images.
    for (let i = 0; i < 9; i++) {
      let square = document.getElementById(String(i));
      square.style.backgroundImage = '';
    }

    //This line clears our canvas.
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, 608, 608);

    //This resets our selectedSquares array so a new game can start.
    selectedSquares = [];
    //This sets our active player back to X.
    activePlayer = 'X';
  }, 1000);
}
