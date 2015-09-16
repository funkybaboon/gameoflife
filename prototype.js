var isAlive = function(flag, neighbours){
  var life = true;
  
  if (flag === true) {
    if (neighbours < 2 || neighbours > 3) {
      life = false;
    }    
  } else { //flag === false
    life = false; 
    if (neighbours === 3) {
      life = true;
    }    
  }
  
  return life
}

var Game = function(size) {
    this.size = size;
    this.cells = [];
    
    for (let row = size - 1; row >= 0; --row) {
      let cellRow = [];
      for (let column = size - 1; column >= 0; --column) {
        cellRow.push(false);
      }
      this.cells.push(cellRow);
    }
  
}

Game.prototype.getStatus = function(x, y) {
  if (x >= this.size || y >= this.size) {
    return true;
  }
  
  return false;
}

Game.prototype.setLife = function (x, y, living) {
  this.cells[y][x] = living;
}

Game.prototype.getLife = function (x, y) {
  return this.cells[y][x];
}

describe('game of life', function() {
  
  describe('rules', function () {
    
    it('should die for alive with 0 neighbours', function() {
      assert.equal(isAlive(true, 0), false);
    });
    
    it('should die for 1 neighbour', function () {
       assert.equal(isAlive(true, 1), false);
    });
    
    it('should stay alive for 2 neighbours', function () {
      assert.equal(isAlive(true, 2), true);
    })
    
    it('should stay alive for 3 neighbours', function () {
      assert.equal(isAlive(true, 3), true);
    });
    
    it('should stay dead for 0 neighbours', function () {
      assert.equal(isAlive(false, 0), false);
    });
    
    it('should stay dead for 1 neighbours', function () {
      assert.equal(isAlive(false, 1), false);
    });
    
    it('should stay dead for 2 neighbours', function () {
      assert.equal(isAlive(false, 2), false);
    });
    
    it('should die for more than 3 neighbours', function () {
      assert.equal(isAlive(true, 4), false);
      assert.equal(isAlive(true, 6), false);
      
    });
    
    it('should generate for exactly 3 neighbours', function () {
      assert.equal(isAlive(false, 3), true);
    });
    
  });
  
  describe('cells', function () {
    
    it('creates a 10x10 matrix', function () {
      let game = new Game(10);
      assert.equal(game.getStatus(0,0), false);
      assert.equal(game.getStatus(9,9), false);
      assert.equal(game.getStatus(10,10), true);
    });

    it('should set a cell alive', function () {
      let game = new Game(10);
      game.setLife(0,0,true);
      assert.equal(game.getLife(0,0), true);
      assert.equal(game.getLife(0,1), false);
    });

    

  });
  
});