
function headerColoring() {
	//Header color behavior
	if(location.pathname == '/') {
		$('.buffer').hide();
		if ($('.page-content').offset().top - $(window).scrollTop() > 60) {
			$('.site-header').addClass('transparent');
		} else {
			$('.site-header').removeClass('transparent');
		}
	} else if (location.pathname == '/archive/'){
		$('.buffer').show();
	} else {
		$('.buffer').show();
		$('.site-header').removeClass('transparent');
	}
}

function askForShow() {
	// Ask for current show
	if (/\/[0-9]*/.test(location.pathname)) {
		console.log('GET now_playing');
		$.get( "https://us-central1-kwur-backend.cloudfunctions.net/now_playing").done(function( data ) {
			console.log(data.results);
		  	if (data.results) {
		   		$('.listen-in-show').text("Listen in: " + data.results[0].ShowName + " with\xa0" + data.results[0].ShowUsers[0].DJName);
		   		if (data.results[0].ShowUsers.length > 1){
		   			$('.listen-in-show').text( $('.listen-in-show').text() + " & " + data.results[0].ShowUsers[1].DJName);
		   		}
		  	}
		});
	}
}

$(window).resize( function() {

	$('.header-img').css('max-height', $('.header-img').children('img').height() );

});

$(document).ready( function() {

	//askForShow();
	headerColoring();

	$('.dropdown').on('click', function() {
		if ($(window).width() <= 600) {
			$(this).toggleClass('hover');
		}
	});

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

	setInterval(function() {
		var now = new Date();
	    if (now.getMinutes() === 0) {
	        askForShow();
	    }
	}, 60000);

	if (location.pathname == '/archive/') {
		$('.archive-thumb').on('click', function() {
			$($("img[src$='" + $(this).find('img').attr('src') + "']").get(1)).closest('.carousel-item').addClass('active');
			$('.carousel-container').show();
		})

		$('.carousel-control-close').click('click', function(){
			if ($('.carousel-container').is(':visible')){
				$('.carousel-container').hide();
				$('.carousel-item').each( function() {
					$(this).removeClass('active');
				})
			}
		})
	}


});

$(window).scroll(headerColoring);
