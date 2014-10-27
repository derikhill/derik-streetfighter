$(document).ready(function() {
	playTheme();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.instructions').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.instructions').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
			.animate(
				{'left': '300px'},
				600,
				function() {
					$(this).hide();
					$(this).css('left', '-140px');	
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$(document).keydown(function(e) {	
		if (e.keyCode == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide(); 
		$('.ryu-throwing').hide(); 
		$('.ryu-cool').show();
		}
	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		};
});
	
	function playHadouken () {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();	
	}

	function playTheme () {
	$('#theme-music') [0].volume = 0.4;
	$('#theme-music') [0].load();
	$('#theme-music') [0].play();
	}
});	