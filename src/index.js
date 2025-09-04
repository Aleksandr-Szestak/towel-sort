module.exports = function towelSort(matrix) {
  let i;
  let j;
  let row;
  let ord = true;
  const rez = [];
  if (matrix !== undefined) {
    for (i = 0; i < matrix.length; i += 1) {
      row = matrix[i];
      if (ord) {
        for (j = 0; j < row.length; j += 1) {
          rez.push(row[j]);
        }
      } else {
        for (j = row.length - 1; j >= 0; j -= 1) {
          rez.push(row[j]);
        }
      }
      ord = !ord;
    }
  }
  return rez;
};
