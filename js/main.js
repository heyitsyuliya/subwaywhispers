$(function() {
	console.log('ready')

	// dropdown functionality
	$('.dropdown-content').hide()

	// events
	$('.nav-links > ul > li:nth-child(1) > a').on('click', slideContent)
	$('.nav-links > ul > li:nth-child(2) > a').on('click', slideContent)

	// functions
	function slideContent(event){

		event.preventDefault()
		var target = $(this).attr('href'),
			offsetTop = $(target).offset().top;

		$('html, body').animate({scrollTop:offsetTop}, 800)
	}
});