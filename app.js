$(document).ready(function() {
	$('#formOne').submit(function() {
		event.preventDefault();
		//console.log(arr);
		const beepBoop = () => {
			const input = $('#userString').val();
			// console.log(splitInput);
			if (isNaN(input)) {
				console.log('Error: please input a number!');
				// return;
			}
			let currentNumber = 0;

			while (currentNumber !== parseInt(input)) {
				let currentSplit = currentNumber.toString().split('');
				// console.log(currentNumber);
				// console.log(currentSplit);
				if (currentSplit.includes('3')) {
					$('#');
					console.log("I'm sorry, Dave. I'm afraid I can't do that.");
				} else if (currentSplit.includes('2')) {
					console.log('Boop!');
				} else if (currentSplit.includes('1')) {
					console.log('Beep!');
				} else {
					console.log(currentNumber);
				}
				currentNumber += 1;

				// 	if (currentNumber ===  console.log(currentNumber);
				// }
				// }
			}
		};
		beepBoop();
	});
});
