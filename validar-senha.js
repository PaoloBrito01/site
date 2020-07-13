const login = {
	usuario: "fuvio",
	senha: "wxc13$15prb5"
}

function validarLogin() {
	if (document.getElementById("Username").value == login["usuario"] && document.getElementById("Password").value == login["senha"]){
		console.log("Logado com sucesso")
		document.getElementById("Form").setAttribute("action", "dashboard.html")	  		
	}else{
		console.log("Login falhou")
		document.getElementById("Form").innerHTML = "Login falhou"
	}
}