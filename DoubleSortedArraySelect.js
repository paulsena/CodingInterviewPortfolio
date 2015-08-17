// Given two sorted lists (or arrays)
// and a number k, create an algorithm to fetch the least k numbers of the two lists. 

//1, 5, 6, 7
//2, 3, 8
//Don't merge and resort, avg is n log n.  Use references and scan through one time.

var arr1 = [1,4,];
var arr2 = [1,3,8];

merge_arrays(arr1, arr2, 6);

function merge_arrays(arr1, arr2, limit) {
	var i = 0, j = 0;
	var result = [];

	//Make sure limit is not greater then both str lengths
	var strLength = arr1.length + arr2.length;
	if (limit > strLength) {
		limit = strLength;
	}

	//For limit Numbers
	for (var n=0; n < limit; n++) {

		//If arr1 index j is OOB, incr i index
		if (j == -1) {
			result.push(arr1[i]);
			i = _incrementCntr(i, arr1.length);
		}
		//If arr2 index i is OOB, incr j index
		else if (i == -1) {
			result.push(arr2[j]);
			j = _incrementCntr(j, arr2.length);
		}
		//If arr1 val is smaller add, incr i index
		else if (arr1[i] <= arr2[j]) {
			result.push(arr1[i]);
			i = _incrementCntr(i, arr1.length);
		} 
		//Otherwise add arr2 val, incr j index
		else {
			result.push(arr2[j]);
			j = _incrementCntr(j, arr2.length);
		}
	}

	console.log(result);
}

function _incrementCntr(cntr, arrlen) {
	if (cntr + 1 >= arrlen) {
		//Set Out of Bound value
		cntr=-1;
	} else {
		cntr++;
	}
	return cntr;
}

