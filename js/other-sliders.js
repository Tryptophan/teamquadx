window.onload = function start(){
	mentoringSlideshow("#mentoring-slider");
	outreachSlideshow("#outreach-slider");
}

/*Resources sliders*/
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

function outreachSlideshow(id){
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