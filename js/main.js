// WEB303 Assignment 2
// Ahmed Abdella 
//0777010


$(function () {
	
	let xhr = new XMLHttpRequest;
	let content = document.getElementById('content');

	$('#prospect').click(function () {
		
		xhr.open('GET', 'prospect.html', true);

		xhr.onload = function () {
		if ( xhr.status === 200 ){
			content.innerHTML = xhr.responseText;
			}
		}
		xhr.send();

		$("div#content").hide();
		$("div#content").slideDown("slow");
		
	});

	$('#convert').click(function () {
		
		xhr.open('GET', 'convert.html', true);
	
		xhr.onload = function () {
		if ( xhr.status === 200 ){
			content.innerHTML = xhr.responseText;
			}
		}
		xhr.send();

		$("div#content").hide();
		$("div#content").slideDown("slow");
		
	});

	$('#retain').click(function () {
		
		xhr.open('GET', 'retain.html', true);

		xhr.onload = function () {
		if ( xhr.status === 200 ){
			content.innerHTML = xhr.responseText;
			}
		}
		xhr.send();

		$("div#content").hide();
		$("div#content").slideDown("slow");
		
	});

});



