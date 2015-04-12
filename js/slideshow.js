window.onload = function start() {
	supers15_Slideshow("#supers15-slider");
	regionals2015_Slideshow("#regionals2015-slider");
	sotxSlideshow("#sotx-slider");
	harldandaleSlideshow("#harlandale-slider");
	quals1Slideshow("#qualifier1-slider");
	scrimmageSlideshow("#scrimmage-slider");
	mentoringSlideshow("#mentoring-slider");
	halloweendSlideshow("#halloween-slider");
	firstbuildSlideshow("#first-build-slider");
	kickoffSlideshow("#kickoff-slider");
	outings1Slideshow("#outings-p1-slider");
	outings2Slideshow("#outings-p2-slider");
	supersSlideshow("#supers-slider");
	regionalsSlideshow("#regionals-slider");
	crateSlideshow("#crates-slider");
	conallySlideshow("#conally-slider");

	$(".page").hide();
	$("#page-1").show();

}

/*Pagination control*/
$(".pagination li.pg-btn").click(function(){
	$(".pagination li").removeClass("active");
	$(this).addClass("active");
	var pos = this.id;
	console.log("#page" + "-" + pos);
	$(".page").hide();
	$("#page-" + this.id).show();
});
 	
$("#back-btn").click(function(){
	var pos = 0;
	for(var i = 1; i <= 3; i++){
		if($("#" + i).hasClass("active"))
		{
			pos = i - 1;
			console.log(pos);
			//break;
			/*if($(this.id) == 3){
				window.onload = function()
				{
					firstbuildSlideshow("#first-build-slider");
					kickoffSlideshow("#kickoff-slider");
					outings1Slideshow("#outings-p1-slider");
					outings2Slideshow("#outings-p2-slider");
					supersSlideshow("#supers-slider");
				}
			}*/
					
		}
	}
	
	if(pos > 0){
		$(".page").hide();
		$("#page-" + pos).show();
		$(".pagination li").removeClass("active");
		$("#" + pos).addClass("active");	
	}
});

$("#forward-btn").click(function(){
	var pos = 0;
	for(var i = 1; i <= 3; i++){
		if($("#" + i).hasClass("active"))
		{
			pos = i + 1;
			console.log(pos);
			break;
		}
	}
	if(pos < 4){
		$(".page").hide();
		$("#page-" + pos).show();
		$(".pagination li").removeClass("active");
		$("#" + pos).addClass("active");	
	}
});

/*Sliders for each post*/

function supers15_Slideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num <= 3) {
			num++;
		}
		else {
			num = 0;
		}
	}, 3000);
}

function regionals2015_Slideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num <= 4) {
			num++;
		}
		else {
			num = 0;
		}
	}, 3000);
}

function sotxSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num <= 3) {
			num++;
		}
		else {
			num = 0;
		}
	}, 3000);
}

function harldandaleSlideshow(id) {
	var num = 1;
	$(id + " div").hide();
	$(id + "-" + 0).show();
	loop = window.setInterval(function() {
		$(id + " div").hide().fadeOut();
		$(id + "-" + num).fadeIn();
		if (num <= 2) {
			num++;
		}
		else {
			num = 0;
		}
	}, 3000);
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
		if (num == 3) {
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
		if (num == 2) {
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
		if (num == 3) {
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

function conallySlideshow(id) {
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

function mentoringSlideshow(id) {
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

function scrimmageSlideshow(id) {
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

function quals1Slideshow(id) {
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