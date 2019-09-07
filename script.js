function valida(){
	var nome = document.getElementById('nome');

	if (nome.value ==""){
		alert("Campo nome não pode estar em branco.");
	}
	else {
		alert("Seu formulário foi enviado com Sucesso");
	}
}