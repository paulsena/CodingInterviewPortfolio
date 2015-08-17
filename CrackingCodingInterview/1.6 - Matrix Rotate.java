//1.6 Given an image represented by an NxN matrix, where is pixel is 4 Bytes, 
// rotate the image 90 degrees.  Can you do it in place?
// xxx
// xxx
// xxx
public class MatrixRotate {

public static void main(String[] args) {

	int[][] matrix2 = new int[][] {{1,1},
				   		{2,2}};

	int[][] matrix3 = new int[][] {{1,1,1},
						{2,2,2},
						{3,3,3}};

	int[][] matrix4 = new int[][] {{1,1,1,1},
						{2,2,2,2},
						{3,3,3,3},
						{4,4,4,4}};

	printMatrix(rotateMatrix(matrix2, 2),2);
	printMatrix(rotateMatrix(matrix3, 3),3);
	printMatrix(rotateMatrix(matrix4, 4),4);
}

public static int[][] rotateMatrix(int[][] matrix, int n) {

	for (int layer=0; layer<(n-1); layer++) {
		//console.log("Layer: " + layer);
		for(int i=layer; i<(n-layer-1); i++) {
			//console.log("i: " + i);

			//Right = Top
			int tempRight = matrix[i][n-layer-1];
			matrix[i][n-layer-1] = matrix[layer][i];
			//Bottom = Right
			int tempBottom = matrix[n-layer-1][n-i-1];
			matrix[n-layer-1][n-i-1] = tempRight;
			//Left = Bottom
			int tempLeft = matrix[n-i-1][layer];
			matrix[n-i-1][layer] = tempBottom;
			//Top == Left
			matrix[layer][i] = tempLeft;

		}
	}

	return matrix;
}

private static void printMatrix(int[][] matrix, int n) {
	for (int i = 0; i < n; i++) {
	    for (int j = 0; j < n; j++) {
	        System.out.print(matrix[i][j] + " ");
	    }
	    System.out.print("\n");
	}
	System.out.print("\n");
}

}