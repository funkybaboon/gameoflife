describe('mocha+assert API description', function() {
  
  it('create new cell should be added to table', function() {
    let table = new Table;
    table.add(0,1);
    assert.equal(table.contains(0,1), true);
  });

  it('should have 0 neighbours', function() {
    let newCell = new Cell(1,0);
    let table = new Table;
    assert.equal(table.neighbours(1,1), 0);
  });

  it('should have 3 neighbours', function() {
    let table = new Table;
    table.add(1,1);
    table.add(1,0);
    table.add(0,1);
    assert.equal(table.neighbours(0,0), 3);
  });

  it('should have 2 neighbours', function() {
    let table = new Table;
    table.add(-1,1);
    table.add(0,1);
    assert.equal(table.neighbours(0,0), 2);
  });

  it('should have 8 neighbours', function() {
    let table = new Table;
    table.add(-1,1);
    table.add( 0,1);
    table.add( 1,1);

    table.add(-1,0);
    table.add( 0,0);
    table.add( 1,0);

    table.add(-1,-1);
    table.add( 0,-1);
    table.add( 1,-1);

    assert.equal(table.neighbours(0,0), 8);
  });

  it('should get a cell by coordinates', function() {
    let table = new Table;
    table.add(1,0);
    assert.equal(table.contains(1,0), true);
    assert.equal(table.contains(0,0), false);
  });

  it('should add a cell by coordinates', function() {
    let table = new Table;
    table.add(1,1);
    assert.equal(table.contains(1,1), true);
  });

  it('should remove a cell by coordinates', function() {
    let table = new Table;
    table.add(1,1);
    assert.equal(table.contains(1,1), true);
    table.remove(1,1);
    assert.equal(table.contains(1,1), false);
  });

  it('living cell should die with less than 2 neighbours', function() {
    let table = new Table;
    table.add(0,0);
    assert.equal(table.alive(0,0), false);
    table.add(0,1);
    assert.equal(table.alive(0,0), false);
  });

  it('living cell should live with 2 or 3 neighbours', function() {
    let table = new Table;
    table.add(0,0);

    table.add(0,1);
    table.add(1,1);

    assert.equal(table.alive(0,0), true);

    table.add(1,0);
    assert.equal(table.alive(0,0), true);
  });

  it('living cell with more than 3 neighbours dies', function() {
    let table = new Table;
    table.add(0,0);

    table.add(-1,1);
    table.add(0,1);
    table.add(1,1);

    table.add(-1,0);
    table.add(1,0);
    assert.equal(table.alive(0,0), false);
  });

  it('dead cell comes alive with exactly  3 neighbours', function() {
    let table = new Table;

    table.add(-1,1);
    table.add(0,1);
    assert.equal(table.alive(0,0), false);

    table.add(1,1);
    assert.equal(table.alive(0,0), true);
  });

});


class Cell {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}

class Table {
  constructor() {
    this.aliveCells = [];
  }
  
  add(x,y){
    let newCell = new Cell(x,y);
    this.aliveCells.push(newCell);
  }

  remove(x,y) {
    for(var i = 0; i < this.aliveCells.length; i++) {
      if (this.aliveCells[i].x === x && this.aliveCells[i].y === y ) {
        this.aliveCells.pop(this.aliveCells[i]);
      } 
    }
  }
  
  neighbours(x,y) {
    var n = 0;
  
    //top row
    n += this.contains(x-1, y+1) ? 1 : 0;
    n += this.contains(x  , y+1) ? 1 : 0;
    n += this.contains(x+1, y+1) ? 1 : 0;
    
    //row
    n += this.contains(x-1, y  ) ? 1 : 0;
    n += this.contains(x+1, y  ) ? 1 : 0;
    
    //bottom row
    n += this.contains(x-1, y-1) ? 1 : 0;
    n += this.contains(x  , y-1) ? 1 : 0;
    n += this.contains(x+1, y-1) ? 1 : 0;
    
    console.log(n);
    
    return n;
  }
  
  contains(x, y) {
    for(var i = 0; i < this.aliveCells.length; i++) {
      if (this.aliveCells[i].x === x && this.aliveCells[i].y === y ) {
        return true;
      } 
    }
    return false;
  }
  
  alive(x,y) {
    let neighbours = this.neighbours(x,y);
    let alive = this.contains(x,y);
    
    console.log(neighbours, alive);
    
    let map = [false, false, true, true, false, false, false, false, false ];
    if( !alive && neighbours === 2) {
      return false;
    }
    return map[neighbours];
  }
  
}
