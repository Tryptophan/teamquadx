$(".entries div").hover(
	function() {
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("cursor", "default");
});

$("#nt-1").click(function() {
	var length = $("#entries").length;
	for (i = 0; i < length i++) {
		$("#nt-" + i + "-block").hide("swing");
	}
	$("#nt-1-block").show("swing");
});