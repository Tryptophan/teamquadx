<?php
	$email = $_POST['email'];
	$to = $_POST['to'];

	if ($to == "Team Quadx") {
		$to = "";
	}

	if ($to == "Linnea May") {
		$to = "linnealovespie@gmail.com";
	}

	if ($to == "Jacob Greenway") {
		$to = "jagreenway12@gmail.com";	
	}

	if ($to == "Eddie Bates") {
		$to = "eddie9ner@gmail.com";
	}

	if ($to == "Lizzy Patterson") {
		$to = "lizzy.patterson2212@gmail.com";
	}

	$subject = "AUTOMATED EMAIL FROM teamquadx.org, DO NOT REPLY.";
	$message = $_POST['message'];

	mail($to, $subject, $message);

?>