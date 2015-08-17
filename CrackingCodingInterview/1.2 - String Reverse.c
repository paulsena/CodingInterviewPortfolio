#include <string.h>
#include <stdio.h>

//Inplace Reversal
void reverse(char* str) {
	int length = strlen(str);
	int mid = (length/2)-1;

	for (int i=0; i<=mid; i++) {
		str[length] = str[i]; //Use null byte at end as temp
		str[i] = str[length-1-i];
		str[length-1-i] = str[length];
	}
	str[length] = '\n';
	
	return;
}

int main() {
	char str[100] = "Hello";
	reverse(str);
	printf("%s\n", str);
}