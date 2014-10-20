// Click Effects

$("#robot-btn").click(
	function() {
		$(".feature-nav").stop().animate({
			top: "8%"
		}, 250);
	$(".robot-des").stop().slideUp();
	$(".slide-des").stop().slideUp();
	$(".gyro-des").stop().slideUp();
	$(".wheel-des").stop().slideUp();

	$(".robot-des").stop().slideDown();
});

$("#slide-btn").click(
	function() {
		$(".feature-nav").stop().animate({
			top: "33%"
		}, 250);
	$(".robot-des").stop().slideUp();
	$(".slide-des").stop().slideUp();
	$(".gyro-des").stop().slideUp();
	$(".wheel-des").stop().slideUp();

	$(".slide-des").stop().slideDown();
});

$("#gyro-btn").click(
	function() {
		$(".feature-nav").stop().animate({
			top: "58%"
		}, 250);
	$(".robot-des").stop().slideUp();
	$(".slide-des").stop().slideUp();
	$(".gyro-des").stop().slideUp();
	$(".wheel-des").stop().slideUp();

	$(".gyro-des").stop().slideDown();
});


$("#wheel-btn").click(
	function() {
		$(".feature-nav").stop().animate({
			top: "83%"
		}, 250);
	$(".robot-des").stop().slideUp();
	$(".slide-des").stop().slideUp();
	$(".gyro-des").stop().slideUp();
	$(".wheel-des").stop().slideUp();

	$(".wheel-des").stop().slideDown();
});
