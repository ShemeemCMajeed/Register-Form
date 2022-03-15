<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Registration</title>
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">
	<link rel="stylesheet" href="registerstyle.css">
	<script type="text/javascript" src="validationregister.js"></script>
	
</head>
<body>
	<div class="banner">
<div class="navbar">
<img alt="Home Logo" src="images/download.png" class="logo">
<ul>
<li><a href="home.jsp">Home</a></li>
<li><a href="#">About Us</a></li>
<li><a href="contactus.jsp">Contact Us</a></li>
<li><a href="login.jsp">Login</a></li>
<li><a href="register.jsp">Register</a></li>
</ul>
</div>
<div class="container">
	<div class="header">
		<h2>Sign Up</h2>
	</div>
	<form action="home.jsp" method="post" class="form" id="form" name="myForm" onsubmit="return checkInputs()">
		<div class="form-control">
			<label for="username">Username</label><br>
			<input style="width: 100%" type="text" placeholder="Enter Username" id="username" /><br>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="password">Password</label><br>
			<input style="width: 100%" type="password" placeholder="Enter Password" id="password" /><br>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="firstname">First Name</label><br>
			<input style="width: 100%" type="text" placeholder="Enter Your First Name" id="firstname" /><br>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="lastname">Last Name</label><br>
			<input style="width: 100%" type="text" placeholder="Enter Your Last Name" id="lastname" /><br>
			<small>Error message</small>
		</div>
		<div class="form-control">
			<label for="email">Email</label><br>
			<input style="width: 100%" type="email" placeholder="Enter Your Email" id="email" /><br>
			<small>Error message</small>
		</div>
		<div class="form-control">
		<label>Gender</label><br>
		<label for="male"><input type="radio" class="btn" name="gender" id="male" value="Male">Male</label>
        <label for="female"><input type="radio" class="btn" name="gender" id="female" value="Female">Female</label><br>
        <span id="genid" style="color: red"></span>
		</div>
		<div class="form-control">
		    <label for="age">Age</label><br>
			<input style="width: 100%" type="text" placeholder="Enter Your Age" id="age" /><br>
			<small>Error message</small>
			</div>
		<div class="form-control">
		    <label for="phone">Phone</label><br>
			<input style="width: 100%" type="text" placeholder="Enter Your Phone No" id="mobile" maxlength="10" /><br>
			<small>Error message</small>
		</div>
		<input type="submit" value="Register">
		<p style="margin-left: 10px;color: black">
					Already a member? <a href="login.jsp">Login</a>
				</p>
	</form>
	
</div>
</div>


	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
		integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
		integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		crossorigin="anonymous"></script>
</body>
</html>