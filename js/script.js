
$(window).resize( function() {

	$('.header-img').css('max-height', $('.header-img').children('img').height() );

});

$(document).ready( function() {
	$.get( "https://us-central1-kwur-backend.cloudfunctions.net/now_playing")
	  .done(function( data ) {
	    console.log(data);
	  });
})