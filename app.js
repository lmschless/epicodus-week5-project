$(document).ready(function() {
	$('#formOne').submit(function() {
		//console.log(arr);
		const beepBoop = () => {
			const input = $('#userString').val();
			const splitInput = input.split('');
			console.log(splitInput);
			if (isNaN(input)) {
				console.log('Error: please input a number!');
				// return;
			}
			let currentNumber = 0;
			// while (currentNumber !== parseInt(input)) {
			// 	currentNumber += 1;
			// 	// 	if (currentNumber ===  console.log(currentNumber);
			// 	// }
			// 	return;
			// }
			event.preventDefault();
		};
		beepBoop();
	});
});
