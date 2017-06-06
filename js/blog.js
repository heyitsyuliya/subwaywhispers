$(function(){
	// BLOG PAGE FUNCTIONS
	
	// pulling json for blog page
	$.getJSON('https://subwaywhispers.firebaseio.com/whispers/posts.json', function(data){
		var stories = [];

		$.each(data, function(key, val) {

			var name = val.name,
				whisperAbout = val.whisperAbout,
				date = val.date,
				subway = val.subway;
			//console.log(JSON.stringify(val))

			stories.push('<div class="item" id="' + JSON.stringify(key) + '"><div class="item-top"><p>' + name + '</p></div><div class="item-whisper"><p>'+ whisperAbout + '</p></div><div class="item-date"><p>'+ date +'</p></div></div>')
		});

		console.log(data)


		$("<div>", {
			html: stories.join("")
		}).appendTo('.masonry');
	})
});

