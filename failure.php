<!DOCTYPE html>
<html>
<head lang="en">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Team Quadx - Contact Us</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css" />
	<link rel="stylesheet" type="text/css" href="css/main.css" />
</head>
<body>

	<nav class="navbar navbar-default" role="navigation">
		<div class="container-fluid">

			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed glyphicon glyphicon-th-list" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="http://teamquadx.org" class="navbar-brand">QUADX</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<li><a href="index.html">Home</a></li>
					<li><a href="our-robot.html">Our Robot</a></li>
					<li><a href="the-team.html">The Team</a></li>
					<li><a href="events.html">Events</a></li>
					<li><a href="resources.html">Resources</a></li>
				</ul>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="blog.html">Blog</a></li>
					<li class="active"><a href="contact-us.php">Contact</a></li>
				</ul>
			</div> <!-- /.navbar-collapse -->
		</div> <!-- /.container-fluid -->
	</nav>

	<div class="header-block"></div>

	<div class="content-container">

		<div class="page-header"><h1>Contact Us</h1></div>

		<form class="form-horizontal" action="php/contact.php" method="post">
			<fieldset>
				<div class="form-group">
					<label for="inputEmail" class="col-lg-2 control-label">Email</label>
					<div class="col-md-8">
						<input type="text" class="form-control" id="email" placeholder="Email" name="email">
					</div>
				</div>

				<div class="form-group">
					<label for="select" class="col-lg-2 control-label">Selects</label>
					<div class="col-md-8">
						<select class="form-control" id="select" name="to">
							<option value="1">Team Quadx</option>
							<option value="2">Linnea May</option>
							<option value="3">Jacob Greenway</option>
							<option value="4">Eddie Bates</option>
							<option value="5">Lizzy Patterson</option>
						</select>
					</div>
				</div>

				<div class="form-group">
					<div class="col-md-8 col-lg-offset-2">
						<textarea class="form-control" rows="3" id="textArea" name="message"></textarea>
						<span class="help-block">Leave a message or ask us something!</span>
					</div>
				</div>

				<div class="form-group">
					<div class="col-lg-10 col-lg-offset-2">
						<button name="submit" type="submit" class="btn btn-primary">Submit</button>
					</div>
				</div>
			</fieldset>
		</form>

		<div class="alert alert-dismissable alert-danger form-alert">
			<button type="button" class="close" data-dismiss="alert">X</button>
			<strong>Something went wrong. :(</strong> Please fill in the required fields.
		</div>

	</div>

	<div class="footer">
		<div class="footer-links-sm-md-lg footer-links hidden-xs">
			<a href="http://github.com/Tryptophan/FTC6299" target="_blank">Github</a>
			<a href="http://twitter.com/6299QuadX" target="_blank">Twitter</a>
			<a href="http://youtube.com/quadx6299" target="_blank">YouTube</a>
			<a href="http://viperbots.org" target="_blank">Viperbots</a>
			<a href="http://teamquadx.org/contact-us.php">Contact Us</a>
		</div>
		<div class="footer-links-xs footer-links hidden-sm hidden-md hidden-lg">
			<a href="http://github.com/Tryptophan/FTC6299" target="_blank">Github</a>
			<a href="http://twitter.com/6299QuadX" target="_blank">Twitter</a>
			<a href="http://youtube.com/quadx6299" target="_blank">YouTube</a>
			<a href="http://viperbots.org" target="_blank">Viperbots</a>
			<a href="http://teamquadx.org/contact-us.php">Contact Us</a>
		</div>
	</div>

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/form-alert.js"></script>>
</body>
</html>