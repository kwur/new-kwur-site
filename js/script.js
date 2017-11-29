
$(window).resize( function() {

	$('.header-img').css('max-height', $('.header-img').children('img').height() );

});

$(document).ready( function() {
	$.get( "https://us-central1-kwur-backend.cloudfunctions.net/now_playing")
	  .done(function( data ) {
	  	if (data.results) {
	   		$('.listen-in-show').text(data.results[0].ShowName + " with " + data.results[0].ShowUsers[0].DJName);
	   		if (data.results[0].ShowUsers.length > 1){
	   			$('.listen-in-show').text( $('.listen-in-show').text() + " and&nbsp;" + data.results[0].ShowUsers[1].DJName);
	   		}
	  	}
	  });
})