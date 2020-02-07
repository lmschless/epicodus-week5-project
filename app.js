$(document).ready(function() {
	$('#formOne').submit(function() {
		event.preventDefault();
		$('#summary').empty();
		const input = $('#userString').val();

		if (isNaN(input)) {
			$('#summary').append(
				`<div id="img-div"><h2>Error does not compute: please enter a number.</h2><img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&" class=""></div>`
			);
			return;
		}

		const beepBoop = () => {
			let currentNumber = 0;
			while (currentNumber !== parseInt(input)) {
				let currentSplit = currentNumber.toString().split('');
				// console.log(currentNumber);
				// console.log(currentSplit);
				if (currentSplit.includes('3')) {
					$('#summary').append("I'm sorry, Dave. I'm afraid I can't do that. ");
					console.log("I'm sorry, Dave. I'm afraid I can't do that.");
				} else if (currentSplit.includes('2')) {
					$('#summary').append('Boop!, ');
					console.log('Boop!');
				} else if (currentSplit.includes('1')) {
					$('#summary').append('Beep!, ');
					console.log('Beep!');
				} else {
					$('#summary').append(`${currentNumber}, `);
					console.log(currentNumber);
				}
				currentNumber += 1;
			}
		};
		beepBoop();
	});
});
