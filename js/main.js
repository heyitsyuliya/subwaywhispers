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

	// pulling json for blog page
	$.getJSON('js/posts.json', function(data){
		var stories = [];

		// $.each(data, function(key, val){
		// 	stories.push("<p id='" + JSON.stringify(key) + "'>" + JSON.stringify(val) + "</p>")
		// })

		// $("<div>", {
		// 	"class": "subway-whispers",
		// 	html: stories.join("")
		// }).appendTo('.page-wrapper');

	})

	// try ajax 
	// and then use success to return data and pass 
	// onto another function and display it nicely 
});