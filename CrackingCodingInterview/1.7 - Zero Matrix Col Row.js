/*
* If elem in MxN matrix = 0, zero column and row
*
*/

var m1 = [[1,1,1],
		  [1,1,1],
		  [0,1,1]];

zeroArray(m1, 3,3);
console.log(m1);

function zeroArray (matrix, m, n) {
	var skipRows = []; var skipCols = [];
	for (var i=0; i<m; i++) {
		for (var j=0; j<n; j++) {
			if (matrix[i][j] == 0 && (skipRows.indexOf(j) == -1 && skipCols.indexOf(i) == -1)) {
				for (var k=0; k<m; k++) {
					matrix[k][j] = 0;
				}
				for (var k=0; k<n; k++) {
					matrix[i][k] = 0;
				}
				skipCols.push(i);
				skipRows.push(j);
			}
		}
	}
}