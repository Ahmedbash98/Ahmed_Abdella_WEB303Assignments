/*
	WEB 303 Assignment 1 - jQuery
	{Ahmed Abdella 0777010}
*/


$(function (){

	$('#percent').change(function(){
		
		let salary = $('#yearly-salary').val();
		let percent = $('#percent').val();

		let formula = (salary * percent / 100);
		

		$('#amount').text('$' + formula.toFixed(2));

	});


});



