//1.6 Given an image represented by an NxN matrix, where is pixel is 4 Bytes, 
// rotate the image 90 degrees.  Can you do it in place?
// xxx
// xxx
// xxx

function rotateMatrix(matrix, n) {

	for (var layer=0; layer<(n-1); layer++) {
		//console.log("Layer: " + layer);
		for(var i=layer; i<(n-layer-1); i++) {
			//console.log("i: " + i);

			//Right = Top
			var tempRight = matrix[i][n-layer-1];
			matrix[i][n-layer-1] = matrix[layer][i];
			//Bottom = Right
			var tempBottom = matrix[n-layer-1][n-i-1];
			matrix[n-layer-1][n-i-1] = tempRight;
			//Left = Bottom
			var tempLeft = matrix[n-i-1][layer];
			matrix[n-i-1][layer] = tempBottom;
			//Top == Left
			matrix[layer][i] = tempLeft;

		}
	}

	return matrix;
}

var matrix2 =  [[1,1],
				[2,2]];

var matrix3 =  [[1,1,1],
				[2,2,2],
				[3,3,3]];

var matrix4 =  [[1,1,1,1],
				[2,2,2,2],
				[3,3,3,3],
				[4,4,4,4]];

console.log( rotateMatrix(matrix2, 2) );
console.log( rotateMatrix(matrix3, 3) );
console.log( rotateMatrix(matrix4, 4) );

/*
Pseudo Code
- Rotate layer by layer, startig on outside

*/
