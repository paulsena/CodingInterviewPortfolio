//Classic FizzBizz

function FizzBuzzIterative() {

	for (var i=1; i<=100; i++) {
		var output = "";

		if (i%3==0) {
			output += "Fizz";
		} 
		if (i%5==0) {
			output += "Buzz";
		}
		output.length == 0 ? console.log(i) : console.log(output);
	}
}

FizzBuzzIterative();