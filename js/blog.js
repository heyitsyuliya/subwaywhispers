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

			stories.push('<div class="item" id="' + JSON.stringify(key) + '"><div class="item-top"><div><h3>' + name + '</h3></div><div class="subway-icon"></div></div><div class="item-whisper"><p>'+ whisperAbout + '</p></div><div class="item-date"><p>'+ date +'</p></div></div>')
		});

		console.log(data)

		$("<div>", {
			html: stories.join("")
		}).appendTo('.masonry');

		function displaySubwayIcon(){
		switch (val.subway){
			case '1':
				var image = '<img src="assets/nyc-subway-icons/svg/1.svg">'
				$('.item-top').append(image)
				break;
			case '2':
				var image = '<img src="assets/nyc-subway-icons/svg/2.svg">';
				$('.item-top').append(image);
				break;
			case '3':
				var image = '<img src="assets/nyc-subway-icons/svg/3.svg">';
				$('.item-top').append(image);
				break;
			case '4':
				var image = '<img src="assets/nyc-subway-icons/svg/4.svg">';
				$('.item-top').append(image);
				break;
			case '5':
				var image = '<img src="assets/nyc-subway-icons/svg/5.svg">';
				$('.item-top').append(image);
				break;
			case '6':
				var image = '<img src="assets/nyc-subway-icons/svg/6.svg">';
				$('.item-top').append(image);
				break;
			case '7':
				var image = '<img src="assets/nyc-subway-icons/svg/7.svg">';
				$('.item-top').append(image);
				break;
			case 'a':
				var image = '<img src="assets/nyc-subway-icons/svg/a.svg">';
				$('.item-top').append(image);
				break;
			case 'b':
				var image = '<img src="assets/nyc-subway-icons/svg/b.svg">';
				$('.item-top').append(image);
				break;
			case 'c':
				var image = '<img src="assets/nyc-subway-icons/svg/c.svg">';
				$('.item-top').append(image);
				break;
			case 'd':
				var image = '<img src="assets/nyc-subway-icons/svg/d.svg">';
				$('.item-top').append(image);
				break;
			case 'e':
				var image = '<img src="assets/nyc-subway-icons/svg/e.svg">';
				$('.item-top').append(image);
				break;
			case 'f':
				var image = '<img src="assets/nyc-subway-icons/svg/f.svg">';
				$('.item-top').append(image);
				break;
			case 'g':
				var image = '<img src="assets/nyc-subway-icons/svg/g.svg">';
				$('.item-top').append(image);
				break;
			case 'j':
				var image = '<img src="assets/nyc-subway-icons/svg/j.svg">';
				$('.item-top').append(image);
				break;
			case 'l':
				var image = '<img src="assets/nyc-subway-icons/svg/l.svg">';
				$('.item-top').append(image);
				break;
			case 'm':
				var image = '<img src="assets/nyc-subway-icons/svg/m.svg">';
				$('.item-top').append(image);
				break;
			case 'n':
				var image = '<img src="assets/nyc-subway-icons/svg/n.svg">';
				$('.item-top').append(image);
				break;
			case 'q':
				var image = '<img src="assets/nyc-subway-icons/svg/q.svg">';
				$('.item-top').append(image);
				break;
			case 'r':
				var image = '<img src="assets/nyc-subway-icons/svg/r.svg">';
				$('.item-top').append(image);
				break;
			case 's':
				var image = '<img src="assets/nyc-subway-icons/svg/s.svg">';
				$('.item-top').append(image);
				break;
			case 'z':
				var image = '<img src="assets/nyc-subway-icons/svg/z.svg">';
				$('.item-top').append(image);
				break;
			}
		}
	})
});

