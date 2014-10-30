<?php
	$email = $_POST['email'];
	$to = $_POST['to'];

	switch ($to) {
		case 1:
			$to = "quadx6299@gmail.com";
			break;
		case 2:
			$to = "linnealovespie@gmail.com";
			break;
		case 3:
			$to = "jagreenway12@gmail.com";
			break;
		case 4:
			$to = "eddie9ner@gmail.com";
			break;
		case 5:
			$to = "lizzy.patterson2212@gmail.com";
			break;
	}

	$subject = "AUTOMATED EMAIL FROM teamquadx.org, DO NOT REPLY.";
	$message = $email . "\n" . $_POST['message'];

	if ($email != "" && $message != "") {
		mail($to, $subject, $message);
		header("Location: http://teamquadx.org/success.php");
	}
	else {
		header("Location: http://teamquadx.org/failure.php");
	}
?>