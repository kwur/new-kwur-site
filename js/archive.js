$(document).ready( function() {

	$('.buffer').show();

	$('.archive-thumb').on('click', function() {
		$("img[src$='" + $(this).find('img').attr('src').replace(/-thumb/g,'').replace(/thumbs\//g,'') + "']").closest('.carousel-item').addClass('active');
		$('.carousel-container').show();

		// Arrow key advancement won't work off the bat unless controls are in focus onload
		$('.carousel-control-next').focus();

	})

	$('.carousel-control-close').click('click', function(){
		if ($('.carousel-container').is(':visible')){
			$('.carousel-container').hide();
			$('.carousel-item').each( function() {
				$(this).removeClass('active');
			})
		}
	})

})