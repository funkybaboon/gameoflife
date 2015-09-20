function liveOrDie(n) {
  var arr = [,'DEAD', 'ALIVE', 'ALIVE', 'DEAD', 'DEAD', 'DEAD', 'DEAD', 'DEAD', 'DEAD'];
  return arr[n];
  
}

function getValues() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getRange('A1:C3');
  
  var livingNeighbors = 0;
  livingNeighbors += range.getCell(1,1).getValue();
  livingNeighbors += range.getCell(2,1).getValue();
  livingNeighbors += range.getCell(3,1).getValue();

  livingNeighbors += range.getCell(1,2).getValue();
  livingNeighbors += range.getCell(3,2).getValue();

  livingNeighbors += range.getCell(1,3).getValue();
  livingNeighbors += range.getCell(2,3).getValue();
  livingNeighbors += range.getCell(3,3).getValue();
  
  var cell = range.getCell(2,2).getValue();
 
  return liveOrDie(livingNeighbors);
  //return livingNeighbors;
}
