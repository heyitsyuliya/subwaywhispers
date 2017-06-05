$(function() {
	console.log('ready')

	// MAIN PAGE EVENTS AND LISTENERS

	// events
	$('.nav-links > ul > li:nth-child(1) > a').on('click', slideContent)
	$('.nav-links > ul > li:nth-child(2) > a').on('click', slideContent)
	//$('#user-form > button').on('click', parseFormData)
	$('#subway-line-btn').on('click', subwayDropdown)
	$('#user-form > div > div > div > ul > li').on('click', calculateTrain)
	//$('form').submit(parseFormData)
	$('#user-form > button').on('click', getAllWhispers)

	// functions

	// subway dropdown menu
	function subwayDropdown(event){

		event.preventDefault()
		// dropdown collapses when button was clicked
		if ($('#user-form > div > div > div').hasClass('active')){
			$('#user-form > div > div > div').removeClass('active').addClass('hidden').slideUp('slow')
		}

		else if ($('#user-form > div > div > div').hasClass('hidden')){
			$('#user-form > div > div > div').slideDown('slow').removeClass('hidden').addClass('active')
		}

		else {
			console.log("subwayDropdown() is malfunctioning");
		}
	}
	
	var subway;

	function calculateTrain(){
	
		event.preventDefault();

		// determine which element was clicked, save
		subway = this.id;
		console.log('train N ', subway)
		
		// set value to be displayed on the button
		$('#subway-line-btn').replaceWith('<button id="subway-line-btn">Subway line: ' + subway + '</button>');
		// collapse subway list
		$('#user-form > div > div > div').removeClass('active').addClass('hidden').slideUp('slow')
	}

	// page scroll
	function slideContent(event){

		event.preventDefault();

		var target = $(this).attr('href'),
			offsetTop = $(target).offset().top;

		$('html, body').animate({scrollTop:offsetTop}, 800)
	}

	$('form').submit(function(event){
		event.preventDefault();

		var data = {},
			Form = this;

		console.log(Form);

		$.each(this.elements, function(i, v){
			var input = $(v);
			data[input.attr('name')] = input.val();
			delete data['undefined'];
		})

		$.ajax({
	        cache: false,
	        url : "https://subwaywhispers.firebaseio.com/whispers/posts.json",
	        type: "POST",
	        dataType : "json",
	        data : JSON.stringify(data),
	        context : Form,
	        success : function(callback){
	            //Where $(this) => context == FORM
	            //console.log(JSON.parse(callback));
	            $(this).html("Successfully submited the form!");
	        },
	        error : function(){
	            $(this).html("Unknown error has occurred. Please reload the page.");
	        }
		})
	})

	function getAllWhispers(){
		$.ajax({
			url: "https://subwaywhispers.firebaseio.com/whispers/posts.json",
			type: "GET",
			dataType: "json",
			success: function(resp){
				console.log(resp)
			}
			// data: JSON.stringify(data)
		})
	}
});

/*
	// parsing form data when submitting whisper
	// function parseFormData(){
		
	// 	var subwayLine = subway

	// 	var formData = {
	// 		'name': $('input[type="text"]:nth-child(1)').val(),
	// 		'email': $('input[type="text"]:nth-child(2)').val(),
	// 		'whisper': $('#user-form > textarea').val(),
	// 		'subway': subway,
	// 		'when': $('input[type="date"]').val()
	// 	}
		
	// 	console.log('form data: ', formData)

	// 	$.ajax({
	// 		type: 'POST',
	// 		url: '/js/posts.json',
	// 		data: formData,
	// 		datatype: 'jsonp',
	// 		contentType: 'application/json'
	// 	}).done(function(){
	// 		console.log(data)
	// 	})

	// 	event.preventDefault()
	// } 

	// post parsed data



	// BLOG PAGE FUNCTIONS

	// pulling json for blog page
	// $.getJSON('js/posts.json', function(data){
	// 	var stories = [];

	// 	// $.each(data, function(key, val){
	// 	// 	stories.push("<p id='" + JSON.stringify(key) + "'>" + JSON.stringify(val) + "</p>")
	// 	// })

	// 	// $("<div>", {
	// 	// 	"class": "subway-whispers",
	// 	// 	html: stories.join("")
	// 	// }).appendTo('.page-wrapper');

	// })

	// try ajax 
	// and then use success to return data and pass 
	// onto another function and display it nicely 



// BUGS 

// when subway line is chosen, user can't choose another subway line
// subway variable is not defined
// make sure that dropdown list is not expanding buttons div


*/

