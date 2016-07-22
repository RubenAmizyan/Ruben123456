var hiddenDiv = document.getElementById("showAnswer");
hiddenDiv.style.display = "none";
document.getElementById("waiting").style.display ="none";
var answer = document.getElementById("answer");
var wrapper = document.getElementById("wrapper");
var showAnswer=function()
{
	wrapper.style.display ="none";
	document.getElementById("waiting").style.display ="block";
	setTimeout(mf, 3000);
	
	
	
};

var mf = function(){
	var password =document.getElementById("password").value;
	wrapper.style.display = "block";
	answer.innerHTML = password;
	document.getElementById("quastionDiv").style.display ="none";
	document.getElementById("login").style.display ="none";
	document.getElementById("waiting").style.display ="none";
	hiddenDiv.style.display="block";
};
