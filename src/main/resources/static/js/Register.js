window.onload = function(){
		var show =  document.getElementById("showPass");
		show.onclick = function(){
			var pass = document.getElementsByTagName("input");
			for(var i = 0; i < pass.length; i++){
				if(pass[i].type == "password"){
					pass[i].type = "text";
				} else if(pass[i].type == "text"  && i != 0) {
					pass[i].type = "password";
			    }
			}
		}

		var reg = document.getElementById("reg");
		reg.onclick = function(event){
			var pass = document.getElementsByClassName("psd");
			var usr = document.getElementsByClassName("usr");
			for(var i = 0; i < usr.length; i++){
			if(usr[i].value == "")
			    {alert("Please fill the textfield");
                 event.preventDefault();
                 handleFireButton();
                 }
             }
			if(pass[0].value != pass[1].value){
				alert("Different passwords. Type Again.");
				event.preventDefault();
                handleFireButton();

			} else if(pass[0].value == "" || pass[1].value == ""){
			            alert("Please choose a password");
			            event.preventDefault();
                        handleFireButton();
			            }
			    else{
					alert("Inregistrare reusita!");
					var f = document.getElementById("frm");
					f.action = "http://localhost:8090/home";
				}
		}
}	