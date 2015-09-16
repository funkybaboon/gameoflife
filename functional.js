describe('Game of live rules', function() {
  
  it('living cell with less than two neigbours dies', function() {
    assert.equal(isAlive(true, 1), false);
  });
  
  it('dead cell without excatly 3 neighbours stays dead', function() {
    assert.equal(isAlive(false, 1), false);
  });

  it('living cell with two neigbours lives', function() {
    assert.equal(isAlive(true, 2), true);
  });

  it('living cell with three neigbours lives', function() {
    assert.equal(isAlive(true, 3), true);
  });

  it('living cell with more than three neigbours dies', function() {
    assert.equal(isAlive(true, 8), false);
  });
  
  it('dead cell with excatly three live neighbours comes alive', function() {
    assert.equal(isAlive(false, 3), true);
  });
  
});

describe('Game map', function() {

//    setCell(0,1, true);

  it('should get the current status of the cell', function() {
    assert.equal(getCell(0,0), false);
    assert.equal(getCell(0,1), true);
  });

  it('should set the current status of the cell', function() {
    assert.equal(setCell(0,1, false), getCell(0,1) === false);
  });

  it('should get the correct number of alive neighbours', function() {
    assert.equal(getNeighbours(0,0), 1);
  });
  
});

var gameMapSize = 10;
var cells = new Array(gameMapSize * gameMapSize);


function isAlive(isLiving, neighbourCount) {
  var map = [false, false, true, true, false, false, false, false, false];
  
  return map[neighbourCount];
}

function getNeighbours(x, y) {
  return 1;
}

function setCell(x, y, status) {
  cells[x + y * gameMapSize] = status;
}

function getCell(x, y) {
  console.log(cells);
  return cells.status;
}