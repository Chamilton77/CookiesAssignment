$(document).ready(function(){
	var elem = $('#timer');
//this function sets the click function to the picture and then see's
//if there is a value on the cookie. if there is a value it adds 1
//to the original value.
	$('#sugar').click(function(){
		var currentvalue = parseInt(Cookies.get('sugar'));
		if(!isNaN(currentvalue)){//this means that the cookie is not there
			Cookies.set('sugar', currentvalue + 1);
		}else{//this means that it has a value
			Cookies.set('sugar', 1);
		}
		$('#sug1').text("You have eaten " + Cookies.get('sugar') + " Sugar cookies!");
	});
//this does the same as the first function
	$('#lemon').click(function(){
		var currentvalue = parseInt(Cookies.get('lemon'));
		if(!isNaN(currentvalue)){//this means that the cookie is not there
			Cookies.set('lemon', currentvalue + 1);
		}else{//this means that it has a value
			Cookies.set('lemon', 1);
		}
		$('#lem1').text("You have eaten " + Cookies.get('lemon') +" Lemon cookies!");

	});
//this does the same as the first function
	$('#chocolate').click(function(){
		var currentvalue = parseInt(Cookies.get('chocolate'));
		if(!isNaN(currentvalue)){//this means that the cookie is not there
			Cookies.set('chocolate', currentvalue + 1);
		}else{//this means that it has a value
			Cookies.set('chocolate', 1);
		}
		$('#cho1').text("You have eaten " + Cookies.get('chocolate') + " chocolate cookies!");
	});
	//this is the start of the code for the timer
	//the timer takes a preset value and counts down by one every loop.
		function countdown(timeLeft, timerId) {
		  if (timeLeft == 0) {
		    clearTimeout(timerId);
		    appear();
		  } else {
		    elem.text(timeLeft + ' seconds remaining');
		  }
		}
//this function tells the modal to appear. the modal combines all the totals together and also has a reset button 
		function appear(){
			var totalval = parseInt(Cookies.get('chocolate')) + parseInt(Cookies.get('sugar')) + parseInt(Cookies.get('sugar'));
			$('#modal1').show();
			$('#totals').text("you ate " + totalval + " cookies!");
		}
//This function starts the timer
	$('#start').click(function(){
		var timeLeft = 15;
		var timerId = setInterval(function(){
			countdown(timeLeft, timerId);
			timeLeft--;
		}, 1000);
	});
//This is the click to restart the page and set the values back to 0
	$('#reset').click(function(){
		location.reload();
		Cookies.set('chocolate', 0);
		Cookies.set('lemon', 0);
		Cookies.set('sugar',0);
	});

});
