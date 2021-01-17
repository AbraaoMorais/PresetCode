
	 //----------- BOTÃO COM 2 FUNÇÕES --------------
	// Para usar basta passar a id do seu botao no getElementById
	// E chamar a função "condicao();" no elemento onclick do botão 
	 var trocarf;
	 var trocarf1;
	//--------------------------botao1------------------------------------------------------------
 	function botaof1() {
 		console.log(trocarf);
 		document.getElementById("botao1").innerHTML = "<b>Mostrar Mais</b>"; //injeta html no elemento html
 		trocarf = 1;
 		//oculta conteudo do Id complemento
 		document.getElementById("complemento").style.display = "none"; //oculta elemento
 	}	
 	
 	function botaof2() { 
 		console.log(trocarf);
 		document.getElementById("botao1").innerHTML = "Mostrar Menos"
 		document.getElementById("complemento").innerHTML = "<img src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80' class='post_image'/>";
		 trocarf = 0;
 		document.getElementById("complemento").style.display = "block"; //mostra elemento

 	}
	 //testa e chama a função botão1 ou função botao2.
 	function condicao(){
 	if(trocarf == 0){
 		botaof1();			
 		console.log(botaof1);
 	}else{
 		botaof2();
 		console.log(botaof2);
 		
 	  }
 	}
 //---------------------------------------------------botao2--------------------------------------------------------
 function botaof3() {
	console.log(trocarf);
	document.getElementById("botao2").innerHTML = "<b>Mostrar Mais</b>"; //injeta html no elemento html
	trocarf1 = 1;
	//oculta conteudo do Id complemento
	document.getElementById("codigo").style.display = "none"; //oculta elemento
}	

function botaof4() { 
	console.log(trocarf1);
	document.getElementById("botao2").innerHTML = "Mostrar Menos"
	document.getElementById("codigo").innerHTML = "<code>CLIQUE NOVAMENTE PARA ATIVAR A PRIMEIRA FUNÇÃO DO BOTÃO, QUE É ME OCULTAR!</code>";
	document.getElementById("codigo").style.display = "block"; //mostra elemento
	trocarf1 = 0;


}
//testa e chama a função botão3 ou função botao4.
function condicao2(){
if(trocarf1 == 0){
	botaof3();			
	console.log(botaof3);
}else{
	botaof4();
	console.log(botaof4);
	
  }
}
//------------------- mostra o mause pra trocar a msg---------------------------------


 	/*function trocar(elemento) {
 		elemento.innerHTML = "Passou o mause!"
 	}

 	function voltar(elemento){
 		elemento.innerHTML = "Passe o mause aqui"
	 } */

//-----------------------------------------------------	 

//-------------------função bloquear click-------------

