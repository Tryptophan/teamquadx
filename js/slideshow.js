window.onload = function start() {
	halloweendSlideshow("#halloween-slider");
	firstbuildSlideshow("#first-build-slider");
	kickoffSlideshow("#kickoff-slider");
	outings1Slideshow("#outings-p1-slider");
	outings2Slideshow("#outings-p2-slider");
	supersSlideshow("#supers-slider");
	regionalsSlideshow("#regionals-slider");
	crateSlideshow("#crates-slider");
	$("#page" + " div").hide();
	$("#page-1").show();
}

function halloweendSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
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
		if (num == 5) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

function supersSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num == 8) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

function regionalsSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num == 7) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

function crateSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num == 3) {
			num = 0;
		}
		else {
			num++;
		}
	}, 3000);
}

$(".pagination li").click(function(){
	$(".pagination li").removeClass("active");
	$(this).addClass("active");
	var pos = this.id;
	console.log("#page" + "-" + pos);
	$(".page").hide();
	$("#page-" + this.id).show();
	/*$(".page" + " div").hide();*/
})



