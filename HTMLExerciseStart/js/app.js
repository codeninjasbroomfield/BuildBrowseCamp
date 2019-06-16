$('.menu').on('click', 'li', function() {
	var path = $(this).data('path');
	fetch(path).then(function(response) {
		return response.text().then(function(text) {
			$('.content').html(text);
		})
	});

	if ($( window ).width() <=420){
		$('.menuIcon').show();
		$('.menu').hide();
	}

});

document.addEventListener('DOMContentLoaded', function() {
	var p = document.createElement(p);
	p.textContent = "Dom Ready event is fired";
	document.body.appendChild(p);
});

$('.menuIcon').on('click',function(){
	$('.menu').toggle();
})