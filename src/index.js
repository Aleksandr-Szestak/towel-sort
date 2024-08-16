
// You should implement your task here.

module.exports = function towelSort (matrix) {

let i, j ,row, ord = true;
let rez = [];

if (matrix !== undefined) {

  for(i = 0; i < matrix.length; i++) {

      row = matrix[i];
      
      if (ord) {
        for(j=0; j < row.length; j++) {
          rez.push(row[j]);
        }
      }
      else {
        for(j = row.length-1; j >= 0; j--) {
          rez.push(row[j]);
        }
      }

      ord = !ord;

  }
}

return rez;
}
