$(document).ready(function() {
	$('#formOne').submit(function() {
		event.preventDefault();
		$('#summary').empty();
		const input = $('#userNumbers').val();
		const name = $('#userName').val();
		$('#userName').removeClass('red');
		$('#userNumbers').removeClass('red');

		// checks if the userName input contains a string, if not - change background color to red and shoot error message.
		if (!isNaN(name)) {
			$('#userName').addClass('red');
			$('#summary').append(
				`<div id="img-div"><h2>Error, does not compute: please enter your name, no numbers allowed!</h2><img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&" class=""></div>`
			);

			return;
		}
		// checks if
		if (isNaN(input)) {
			$('#userNumbers').addClass('red');
			$('#summary').append(
				`<div id="img-div"><h2>Error, does not compute: please enter a number.</h2><img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&" class=""></div>`
			);
			return;
		}
		// beepBoop function loops through all numbers leading up to the inputted number
		const beepBoop = () => {
			let currentNumber = 0;
			while (currentNumber !== parseInt(input)) {
				let currentSplit = currentNumber.toString().split('');
				if (currentSplit.includes('3')) {
					$('#summary').append(`I'm sorry, ${name} I'm afraid I can't do that. `);
					console.log(`I'm sorry, ${name} I'm afraid I can't do that. `);
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

		// beepBoopReversed loops through all numbers start from the inputted number down to 0.
		const beepBoopReversed = () => {
			let currentNumber = parseInt(input);
			while (currentNumber !== 0) {
				let currentSplit = currentNumber.toString().split('');
				if (currentSplit.includes('3')) {
					$('#summary').append(`I'm sorry, ${name} I'm afraid I can't do that. `);
					console.log(`I'm sorry, ${name} I'm afraid I can't do that. `);
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
				currentNumber -= 1;
			}
		};
		// if statement runs one of two functions based on if the 'numbers reversed' checkbox is checked or not.
		if ($('#reversed').is(':checked')) {
			beepBoopReversed();
		} else {
			beepBoop();
		}
	});
});
