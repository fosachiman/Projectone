//creates a class for each square on the board

class Box {
  constructor (hasDot, hasRightWall, hasBottomWall) {
    this.hasDot = hasDot;
    this.hasRightWall = hasRightWall;
    this.hasBottomWall = hasBottomWall;
    this.hasBigDot = false;
  }
  push (arr) {
    arr.push(this);
  }
}

//We are going to map every dot and wall into a grid and add them all into an array
//This seems like the best way to go?

boxArray = [];

function createBox (hasDot, hasRightWall, hasLeftWall){
  let box = new Box (hasDot, hasRightWall, hasLeftWall);
  box.push(boxArray);
}


createBox (false, true, true);

for (let i = 0; i < 25; i++){
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, true, false);

createBox (true, false, false);

for (let i = 0; i < 4; i++){
createBox (true, false, true);
}

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, false, false);

for (let i = 0; i < 8; i++){
createBox (true, false, true);
}

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, false, false);

for (let i = 0; i < 4; i++){
  createBox (true, false, true);
}
createBox (true, true, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 3; i++){
createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 7; i++){
createBox (false, false, false);
}

createBox (false, true, false)

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 3; i++){
createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 3; i++){
createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, false, true)

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 7; i++){
  createBox (false, false, true);
}
createBox (false, true, true);

createBox (true, true, false);

createBox (false, false, true);

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 3; i++){
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, true, true);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox(true, false, false);

for (let i = 0; i < 5; i++) {
  createBox (true, false, true);
}

createBox(true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox(true, false, false);

for (let i = 0; i < 5; i++) {
  createBox (true, false, true);
}

createBox(true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox(true, false, false);

createBox(true, false, true);

createBox (true, true, true);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

for (let i = 0; i < 3; i++) {
  createBox (true, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox (true, true, true);

createBox (false, false, false);

createBox (false, true, false);

for (let i = 0; i < 3; i++) {
  createBox (true, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox (true, true, true);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox(false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

//ROWS 1-10 ABOVE

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, false, false);

for (let i = 0; i < 5; i++) {
  createBox (false, false, true);
}

createBox (false, false, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}


createBox (false, false, false);

for (let i = 0; i < 5; i++) {
  createBox (false, false, true);
}

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (false, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (false, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}


createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, false, false);


for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (false, true, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, false);
}
createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, false);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox(false, true, true);

createBox (true, true, false);

createBox (false, false, true);

createBox (false, true, true);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

createBox (false, false, false);

createBox (false, false, true);

createBox (false, false, true);

createBox (false, false, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

///////ROW 17 DONE

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, false);

createBox (false, true, false);

createBox (false, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, false);
}

createBox (false, true, false);

createBox (false, true, false);

createBox (false, false, true);

createBox (false, true, true);

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 7; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, true, false);

createBox (false, false, true);

createBox (false, true, true);

createBox (false, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (false, false, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, false);

createBox (true, false, false);

createBox (true, false, true);

createBox (true, false, false);

for (let i = 0; i < 4; i++) {
  createBox (true, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 3; i++) {
  createBox (true, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox (true, false, false);

for (let i = 0; i < 5; i++) {
  createBox (true, false, true);
}

createBox (true, true, false);

createBox (false, false, false);

createBox (false, true, false);

for (let i = 0; i < 2; i++) {
  createBox (true, false, true);
}

createBox (true, true, false);

createBox (false, true, false);

createBox (true, true, false);

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 2; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, false, true);

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 4; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

for (let i = 0; i < 3; i++) {
  createBox (false, false, true);
}

createBox (false, true, true);

createBox (true, true, false);

createBox (false, true, false);

for (let i = 0; i < 25; i++) {
  createBox (true, false, true);
}

createBox (true, true, true);

//BOARD FIXES
boxArray[283].hasBottomWall = true;
boxArray[284].hasBottomWall = true;
boxArray[358].hasBottomWall = true;
boxArray[359].hasBottomWall = true;
boxArray[370].hasBottomWall = true;
boxArray[371].hasBottomWall = true;
boxArray[55].hasBigDot = true;
boxArray[80].hasBigDot = true;
boxArray[541].hasBigDot = true;
boxArray[566].hasBigDot = true;

//Gives box objects a column and row property

function assignColumnsAndRows () {
  let j = 0;
  let k = 27;
  let l = 1;
  while (l < 23) {
    function inside () {
      for (let i = j; i < k; i++){
        boxArray[i].column = i + 1 + 27 - k;
        boxArray[i].row = l;
     }
      j += 27;
      k += 27;
      l += 1;
    }
    inside ();
  }
}

/// Function to create the map from the objects in the object array:

function createMap () {
  let gameBoard = document.querySelector('#game-board');
  for (let i = 0; i < boxArray.length; i++){
    let boxEl = document.createElement('div');
    boxEl.className = 'box';
    gameBoard.appendChild(boxEl);
    boxEl.style.height = '26px';
    boxEl.style.width = '26px';
    boxEl.setAttribute('row', boxArray[i].row);
    boxEl.setAttribute('column', boxArray[i].column);
    if (boxArray[i].hasDot === true)
      boxEl.innerHTML = '.';
    if (boxArray[i].hasBigDot === true) {
      boxEl.innerHTML = '&#x25c9';
    }
    if (boxArray[i].hasRightWall === true)
      boxEl.style.borderRight = '1px solid blue'
    if (boxArray[i].hasBottomWall === true)
      boxEl.style.borderBottom = '1px solid blue'
  }
}

assignColumnsAndRows();
createMap();

