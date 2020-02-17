/*********************************************************************************/

// this var establishes that the value of 'noon' is 12
// we leave the var in the global scope, so all fn have access to it
var noon = 12;

/*********************************************************************************/

// we write a fn expression that contains the entire application
var showCurrentTime = function() {

	// the function creates a var called 'clock'
	// the value of var...access the DOM, selects an HTML element via its id
	// we select the <span> element through the 'clock' id
	// we assign this code to this var so we can access it through the 'clock' var
	var clock = document.getElementById('clock');

	// we create a 'new' empty object called 'currentTime' (based on the 'Date' F.C.), but we pass in no parameters.
	var currentTime = new Date();

	// we add methods/properties to the new empty object w/o adding properties to the Date F.C.

	/* we add hours, minutes and seconds to the clock */

	// the value of the hours' var is the result of the 'getHours' method found in the 'currentTime' object
	var hours = currentTime.getHours();

	// we add minutes to our clock
	var minutes = currentTime.getMinutes();

	// we add seconds to our clock
	var seconds = currentTime.getSeconds();

	/* the fn creates a string for the 'meridian' */

	// AM = ante meridian (means 'before midday')
	// PM = post meridian (means 'after midday')
	// the clock starts at 'AM'
	var meridian = 'AM';

	/* set hours */

	// noon is 12:00 PM
	// IF the value of 'hours' is greater than or equal to the 'value' of noon (12)
	if (hours >= noon) { 
		
		// the value of the 'meridian' var is mutated to change to the string 'PM'
		meridian = 'PM';
	}

	// IF the value of 'hours' is greater than or equal to the value of 'noon' (12)
	if (hours > noon) {

		// the new value of 'hours' is equal to the current value of 'hours' - 12
		// when the value of 'hours' becomes 13, we subtract 12, to make it 1
		hours = hours - 12;
	}

	/* set minutes */

	// there are 60 minutes in an hour

	// IF the value of 'minutes' is less than 10
	if (minutes < 10) {

		// the value of minutes changes to put a '0' + before the current value of minutes
		// you can put a 0 infront of the value of a variable, by putting that 0 digit as a string
		minutes = '0' + minutes;
	}

	/* set seconds */

	// there are 60 seconds in an hour

	// IF the value of 'seconds' is less than 10
	if (seconds < 10) {

		// the value of seconds changes to put a '0' + before the current value of seconds
		seconds = '0' + seconds;
	}

	/* displays the string */

	// we create a var named 'clockTime'
	// its value IS the value of 'hours' + the value of 'minutes' + the value of 'seconds' + the value of 'meridian'
	// the syntax displays the value as a string of values and strings
	var clockTime = hours + ':' + minutes + ':' + seconds + ' ' + meridian;

	// we use the HTML DOM innerText property on the clock var
	// we use the innerText property to change the text of the HTML element w/ the 'clock' id to be, the value of the 'clockTime' var
	// the value of clockTime is: hours + ':' + minutes + ':' + seconds + ' ' + meridian
	// to keep our code clean, we use the value of 'clock' as a placeholder for accessing the DOM
	// its simpler than writing => document.getElementById('clock').innerText = hours + ':' + minutes + ':' + seconds + ' ' + meridian;
	clock.innerText = clockTime;

};

/*********************************************************************************/

/* gets the clock to increment on its own */

// we create a fn expression 'updateClock'
var updateClock = function() {

	// we create a new empty object 'time' as an INSTANCE
	// then we access the 'getHours' method from it
	var time = new Date().getHours();

	// the fn creates a var 'messageText'
	var messageText;

	// we create a var, its value is a .jpg
	var image = 'https://oceanicexplorer.files.wordpress.com/2012/04/dsc_0430.jpg';

	showCurrentTime();

};

// this var serves as the interval for the Window setInterval Method
// 1000 milliseconds = 1 second
var oneSecond = 1000;

updateClock();

// we use the Window setInterval() Method
// the setInterval() Method calls the updateClock fn by the interval value of the oneSecond var ( every 1000 milliseconds)
setInterval( updateClock, oneSecond /* 1000 */ );
