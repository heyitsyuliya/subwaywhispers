$(function() {
	console.log('ready')

	// MAIN PAGE EVENTS AND LISTENERS

	// events
	$('.nav-links > ul > li:nth-child(1) > a').on('click', slideContent)
	$('.nav-links > ul > li:nth-child(2) > a').on('click', slideContent)
	$('#subway-line-btn').on('click', subwayDropdown)
	$('#user-form > div > div > div > ul > li').on('click', calculateTrain)
	// $('#user-form > button').on('click', getAllWhispers)

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
	
	//var subway;

	function calculateTrain(){
	
		event.preventDefault();

		// determine which element was clicked, save
		subway = this.id;
		console.log('train N ', subway)
		
		// set value to be displayed on the button
		$('#subway-line-btn').replaceWith('<button id="subway-line-btn">Subway line: ' + subway + '</button>');
		// collapse subway list
		$('#user-form > div > div > div').removeClass('active').addClass('hidden').slideUp('slow')
		
		return subway
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
			//delete data['undefined'];
		})

		$.ajax({
	        cache: false,
	        url : "https://subwaywhispers.firebaseio.com/whispers/posts.json",
	        type: "POST",
	        dataType : "json",
	        data : JSON.stringify(data),
	        context : Form,
	        success : function(callback){
	            //Where 
	            //$(this) => context == FORM
	            //console.log(JSON.parse(callback));
	            $(this).html("Successfully submited the form!");
	        },
	        error : function(){
	            $(this).html("Unknown error has occurred. Please reload the page.");
	        }
		})

		// var formData = {
		// 	'email': $('input[type="text"]:nth-child(1)'),
		// 	'name': $('input[type="text"]:nth-child(2)'),
		// 	'whisper-about': $('#user-form > textarea'),
		// 	'date': $('input[type="date"]'),
		// 	'subway': subway
		// }

		// $.ajax({
		// 	type: "POST",
		// 	url: "https://subwaywhispers.firebaseio.com/whispers/posts.json",
		// 	data: formData,
		// 	dataType: "json",
		// 	encode: true
		// }).done(function(data){
		// 	console.log(data)
		// })
	})
});

// BUGS 

// when subway line is chosen, user can't choose another subway line
// subway variable is not defined
// make sure that dropdown list is not expanding buttons div

