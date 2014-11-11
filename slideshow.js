$(document).ready(function() {
	slideShow("#halloween-slider");
});

function slideShow(id) {
	var num = 0;
	window.setInterval(function() {
		num = (num + 1) % id.size();
		$(id + " div").hide();
		$(id + "-" + num).show();
	}, 3000);
}