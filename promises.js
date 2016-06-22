describe('Promises', () => {
    it('Beispiel', function() {
      let promise = new Promise((resolve) => {
        resolve();
      });
      
      return promise;
    });
    
});

function cellSurvives(numberOfNeighbours) {
  return new Promise((resolve) => {
    resolve(numberOfNeighbours == 2 || numberOfNeighbours == 3);
  });
}

describe('Rules', () => {
  it('Cell with less than 2 neighbours dies', () => {
    return cellSurvives(1)
      .then(value => { assert.equal(value, false) });
  });

  it('Cell with 2 neighbours survives', () => {
    return cellSurvives(2)
      .then(value => { assert.equal(value, true) });
  });
  
  it('Cell with 3 neighbours survives', () => {
    return cellSurvives(3)
      .then(value => { assert.equal(value, true) });
  });

  it('Cell with more than 3 neighbours dies', () => {
    return cellSurvives(4)
      .then(value => { assert.equal(value, false) });
  });
});


function countNeighbours(grid, cell) {
  return new Promise(resolve => {
    if (0 === grid.length)
      resolve(0);
    else
      resolve(1);
  });
}

describe('Grid', () => {
  it('Counts neighbours (one cell)', () => {
    const grid = [{x:1, y:1}];
    return countNeighbours(grid, {x:0, y:0})
      .then(value => assert.equal(value, 1));
  });
  
  it('Counts neighbours (empty grid)', () => {
    const grid = [];
    return countNeighbours(grid, {x:0, y:0})
      .then(value => assert.equal(value, 0));
  });
});

function makeCandidateGrid(grid) {
  return new Promise(resolve => resolve([]));
}

describe('Game', () => {
  it('Cell without neighbours dies', () => {
    const grid = [{x:1, y:1}];
    return makeCandidateGrid(grid)
      .then(newGrid => assert.deepEqual(newGrid, []));
  });
});
