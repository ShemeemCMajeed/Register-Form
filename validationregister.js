function checkInputs() {
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var firstname = document.getElementById('firstname');
    var email = document.getElementById('email');
    var gen=document.forms["myForm"]["gender"];
    var age = document.getElementById('age');
    var mobile = document.getElementById('mobile');
    
    let u=0;
    let p=0;
    let f=0;
    let l=0;
    let e=0;
    let g=0;
    let a=0;
    let m=0;
	
	if(username.value === '') {
		setErrorFor(username, 'Please enter the username');
		u=0;
		
	}
	else if (!isUsername(username.value)) {
		setErrorFor(username, 'Username contains small letters,numbers,underscore,dot only');
		u=0;
	}else {
		setSuccessFor(username);
		u=1;
	}
	if(password.value === '') {
		setErrorFor(password, 'Please enter the password');
		p=0;
		
	} else if (!isPassword(password.value)) {
		setErrorFor(password, 'Password should contain atleast 8 character,1 capital,small letter,number&special character');
		p=0;
	}
	 else {
		setSuccessFor(password);
		p=1;
		
	}
	if(firstname.value === '') {
		setErrorFor(firstname, 'Please enter your firstname');
		f=0;
		
	} else if (!isFirstname(firstname.value)) {
		setErrorFor(firstname, 'Firstname contains only alphabets');
		f=0;
		
	} else {
		setSuccessFor(firstname);
		f=1;
		
	}
	if(lastname.value === '') {
		setErrorFor(lastname, 'Please enter your lastname');
		l=0;
		
	} else if (!isLastname(lastname.value)) {
		setErrorFor(lastname, 'Lastname contains only alphabets');
		l=0;
		
	} else {
		setSuccessFor(lastname);
		l=1;
		
	}
	if(email.value === '') {
		setErrorFor(email, 'Please enter your email');
		e=0;
		
	} else if (!isEmail(email.value)) {
		setErrorFor(email, 'Invalid email');
		e=0;
		
	} else {
		setSuccessFor(email);
		e=1;
		
	}
	if(gen[0].checked==false&&gen[1].checked==false) {
		document.getElementById('genid').innerHTML="Please select your gender";
		g=0;
	} else {
		document.getElementById('genid').innerHTML=" ";
		g=1;
	}
	if(age.value === '') {
		setErrorFor(age, 'Please enter your age');
		a=0;
	} else if (!isAge(age.value)) {
		setErrorFor(age, 'Age must between in 18 to 99');
		a=0;
	} else {
		setSuccessFor(age);
		a=1;
	}
	if(mobile.value === '') {
		setErrorFor(mobile, 'Please enter your mobile no');
		m=0;
	} else if (!isMobile(mobile.value)) {
		setErrorFor(mobile, 'Invalid mobile no');
		m=0;
	} else {
		setSuccessFor(mobile);
		m=1;
	}
	
	if(u==1&&p==1&&f==1&&l==1&&e==1&&g==1&&a==1&&m==1) {
		return true;
	}
	else
	return false;
		
}
function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}
function isUsername(username) {
	return /^(?=[a-z0-9._]{3,20}$)(?![0-9])(?!.*[_.]{2})[^_.].*[^_.]$/.test(username);
	}	
	function isPassword(password) {
return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-=]).{8,}$/.test(password);
}
function isFirstname(firstname) {
	  return /^[A-Za-z]+$/.test(firstname);
	}
	function isLastname(lastname) {
	  return /^[A-Za-z]+$/.test(lastname);
	}
	function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isAge(age) {
	return /^(1[89]|[2-9][0-9])$/.test(age);
}
function isMobile(mobile) {
	return /^[789]\d{9}$/.test(mobile);
}

