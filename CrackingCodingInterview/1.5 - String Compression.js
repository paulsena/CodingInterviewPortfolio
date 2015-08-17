/*
* Compress string
* aaabbccc = a3b2c3
*
*/

console.log(compressString("aaabbbcd"));

function compressString (s) {
	var origSize = s.length;
	var newString = "";
	var i=0; 
	var cnt = 1;

	while (i<origSize-1) {
		if (s[i] == s[i+1]) {
			var cnt = 2;
			for (var j=i+2; j<origSize && s[j] == s[i]; j++) {
				cnt++;
			}
			newString += s[i] + cnt;
			i = i + cnt;
		}
		else {
			newString += s[i];
			i++;
		}
	}

	if (i+1 == origSize) {
		newString += s[i];
	}

	return newString;
}
