$(".landing-btn").click(function() {
	var links = new Array("http://teamquadx.org/our-robot.html",
						  "http://teamquadx.org/the-team.html",
						  "http://teamquadx.org/events.html",
						  "http://teamquadx.org/resources.html");

	window.location.replace(links[Math.floor(Math.random() * 4)]);
});