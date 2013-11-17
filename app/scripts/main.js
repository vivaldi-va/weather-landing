function heroImageScaling() {
	var mobile = 480,
		imgRatio = 1920/1200,
		screenRatio = window.innerWidth/window.innerHeight,
		hero = $('#hero');

	console.log(imgRatio > screenRatio);
	if(window.innerWidth > mobile) {
		if(screenRatio > imgRatio) {
			hero.css({
				'-webkit-background-size': '100% auto',
				'background-size': '100% auto'
			});
		} else {
			hero.css({
				'-webkit-background-size': 'auto 100%',
				'background-size': 'auto 100%'
			});
		}
	}

}


$(function() {
	var height = window.innerHeight,
		hero = $('#hero');

	hero.css({
		height: height + 'px'
	});

	heroImageScaling();

	FastClick.attach(document.body);


});