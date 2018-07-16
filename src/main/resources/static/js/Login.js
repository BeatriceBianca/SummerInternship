window.onload = function(){
		var show =  document.getElementById("showPass");
		show.onclick = function(){
			var pass = document.getElementById("pass");
			if(pass.type == "password"){
				pass.type = "text";
			} else {
				pass.type = "password";
			}
		}
}