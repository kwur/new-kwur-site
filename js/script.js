
$(window).resize( function() {

	$('.header-img').css('max-height', $('.header-img').children('img').height() );

});

$(document).ready( function() {
	// Ask for current show
	if (window.location == "http://kwur2.s3-website-us-east-1.amazonaws.com/" || window.location == "http://localhost:4000/") {
		console.log('GET now_playing');
		$.get( "https://us-central1-kwur-backend.cloudfunctions.net/now_playing").done(function( data ) {
			console.log(data.results);
		  	if (data.results) {
		   		$('.listen-in-show').text(data.results[0].ShowName + " with\xa0" + data.results[0].ShowUsers[0].DJName);
		   		if (data.results[0].ShowUsers.length > 1){
		   			$('.listen-in-show').text( $('.listen-in-show').text() + " and " + data.results[0].ShowUsers[1].DJName);
		   		}
		  	}
		});
	}

	// Start carousel
	setInterval( function() {
		let images = $('.header-img');

		for (var i = 0; i < images.length; i++){
			if ($(images[i]).hasClass('active')) {
				$(images[i]).removeClass('active');
				if (i+1 == images.length) {
					$(images[0]).addClass('active');
				} else {
					$(images[i+1]).addClass('active');
				}
				break;
			}
		}
	}, 6000);

});