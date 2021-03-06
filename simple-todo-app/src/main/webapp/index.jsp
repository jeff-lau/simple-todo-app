
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">

<title>Starter Template for Bootstrap</title>

<!-- Bootstrap core CSS -->
<link href="css/bootstrap.css" rel="stylesheet" />

<!-- Custom styles for this template -->
<link href="css/simple-todo-app.css" rel="stylesheet">

<!-- Just for debugging purposes. Don't actually copy this line! -->
<!--[if lt IE 9]><script src="../../docs-assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

<script src="js/ckeditor/ckeditor.js"></script>
</head>

<body>

	<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Jeffs Todo Lists</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>

				<ul class="nav navbar-nav navbar-right">
					<li>
						<button type="button" class="btn btn-default navbar-btn" id="createNewCardButton">
							<span class="glyphicon glyphicon-plus"></span>
						</button>
					</li>
				</ul>

			</div>
			<!--/.nav-collapse -->
		</div>
	</div>

	<div id="app-container">
	</div>


	<!-- Bootstrap core JavaScript
    ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="js/bootstrap/bootstrap.min.js"></script>
	<script src="http://yui.yahooapis.com/3.13.0/build/yui/yui-min.js"></script>

	<script src="js/modules/template-loader/template-loader.js"></script>
	<script src="js/model-views/items-card/items-card-model.js"></script>
	<script src="js/model-views/items-card-list/items-card-modellist.js"></script>
	<script src="js/model-views/items-card-list/custom-rest-sync.js"></script>

	<script src="js/model-views/items-card/card-edit-view.js"></script>
	<script src="js/model-views/simple-todo-app-view.js"></script>
	
	<script src="js/model-views/items-card-list/cards-grid-view.js"></script>
	<script src="js/model-views/items-card/card-view.js"></script>
	
	
	<script src="js/simple-todo-app.js"></script>

</body>
</html>
