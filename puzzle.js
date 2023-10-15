var puzzles = [
    ["./images/14", "./images/9", "./images/10", "./images/15", "./images/13", "./images/7", "./images/3", "./images/5", "./images/6"],
    // Add more puzzles here
  ];

  var currentPuzzleIndex = 0;
  var rows = 3;
  var columns = 3;
  var currTile;
  var otherTile; // blank tile
  var turns = 0;

  window.onload = function() {
    loadPuzzle();
  };

  function loadPuzzle() {
    var puzzle = puzzles[currentPuzzleIndex];
    var imgOrder = puzzle.slice(); // Create a copy of the puzzle array

    // Clear the board
    var board = document.getElementById("board");
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        let tile = document.createElement("img");
        tile.id = r.toString() + "-" + c.toString();
        tile.src = imgOrder.shift() + ".jpg";

        tile.draggable = true; // Make the puzzle piece draggable

        tile.addEventListener("dragstart", dragStart);
        tile.addEventListener("dragover", dragOver);
        tile.addEventListener("dragenter", dragEnter);
        tile.addEventListener("dragleave", dragLeave);
        tile.addEventListener("drop", dragDrop);
        tile.addEventListener("dragend", dragEnd);

        board.appendChild(tile);
      }
    }

    turns = 0;
    document.getElementById("turns").innerText = "Turns: " + turns;
  }

  function dragStart(e) {
    currTile = this;
    e.dataTransfer.setData("text/plain", currTile.id); // Set the data being dragged
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
  }

  function dragLeave() {}

  function dragDrop() {
    otherTile = this;

    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    // Play the sound
  var moveSound = document.getElementById("moveSound");
  moveSound.play();


    turns += 1;
    document.getElementById("turns").innerText = "Turns: " + turns;

    checkPuzzleSolved();
  }

  function dragEnd() {
    currTile = null;
    otherTile = null;
  }

  function checkPuzzleSolved() {
    var puzzle = puzzles[currentPuzzleIndex];
    var board = document.getElementById("board");
    var tiles = board.getElementsByTagName("img");
    var solved = true;

    for (var i = 0; i < tiles.length; i++) {
      var tileId = tiles[i].id;
      var tileOrder = puzzle[i];

      if (tileId !== tileOrder + "-" + i) {
        solved = false;
        break;
      }
    }

    if (solved) {
      // Puzzle solved
      alert("Congratulations! Puzzle solved!");

      // Move to the next puzzle
      currentPuzzleIndex++;
      if (currentPuzzleIndex >= puzzles.length) {
        currentPuzzleIndex = 0; // Restart from the first puzzle if all puzzles are solved
      }

      loadPuzzle();
    }
  }
