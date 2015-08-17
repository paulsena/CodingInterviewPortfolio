//Remove Duplicate Characters from String so that each char appears only once

console.log(removeDupes("aabbbaaccdbac"));

function removeDupes(s) {
	var used = [];
	var newString = "";
	for (var i in s) {
		if (!used[s[i]]) {
			newString += s[i];
			used[s[i]] = true;
		}
	}
	return newString;
}