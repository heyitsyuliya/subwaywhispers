$(function() {
	console.log('ready')

	// dropdown functionality
	$('.dropdown-content').hide()


	//when about was clicked
	$('.nav-links > ul > li:nth-child(1) > a, .nav-links > ul > li:nth-child(3) > a').on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href'),
			offsetTop = $(target).offset().top;

		$("html,body").animate({scrollTop:offsetTop}, 800)
	});

	// // events
	// $('.nav-links > ul > li:nth-child(1) > a').on('click', slideContent(event))
	// $('.nav-links > ul > li:nth-child(3) > a').on('click', slideContent(event))

	// // functions

	// function slideContent(event){

	// 	event.preventDefault()
	// 	var target = $(this).attr('href'),
	// 		offsetTop = $(target).offset().top;

	// 	console.log(target)
	// 	console.log(offsetTop)
	// 	$('html, body').animate({scrollTop:offsetTop}, 800)
	// }
});