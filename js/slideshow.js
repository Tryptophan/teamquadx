window.onload = function start() {
	halloweendSlideshow("#halloween-slider");
	firstbuildSlideshow("#first-build-slider");
	kickoffSlideshow("#kickoff-slider");
	outings1Slideshow("#outings-p1-slider");
	outings2Slideshow("#outings-p2-slider");
}

function halloweendSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		console.log(num);
		if (num <= $(id +"div").size()) {
			num++;
		}
		else {
			num = 0;
		}
	}, 3000);
}

function firstbuildSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		console.log(num);
		if (num == 4) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

function kickoffSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		console.log(num);
		if (num == 1) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

function outings1Slideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		console.log(num);
		if (num == 2) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

function outings2Slideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		console.log(num);
		if (num == 5) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}


