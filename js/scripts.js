// JavaScript to get hour in the day
// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
var date = new Date();
var current_hour = date.getHours();

console.log(date);

//IF nighttime,
if (current_hour >= 11) {
	
	//Remove 'day' calss
	$('body').removeClass('day');
	//Add 'night' class
	$('body').addClass('night');
};



/*var birthday = {
  month: date.getMonth(),
  day: date.getUTCDate(),
  check: date.getMonth() + "/" + date.getUTCDate()
};

if (birthday.check == '0/28') {
  alert('Happy Birthday!');
}

console.log( birthday.check);*/
