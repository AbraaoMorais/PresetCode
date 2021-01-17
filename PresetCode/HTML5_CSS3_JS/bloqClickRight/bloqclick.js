//FUNLÇÃO: bloqueia Click direito do mause com a função oncontextmenu
//link esse codigo ao head do html:  <script type="text/javascript" src="bloqclick.js"></script>
window.onload = function(){
	document.getElementById("bloqclick").oncontextmenu = function()
	{
	alert("mause bloqueado");
	return false;
		}
    }
 // o elemento "bloqclick" é a Id do objeto que deseja bloquear o click, basta troca-lo pela sua.   
//----------------------------------------------------------------------------------------------
//use this to block all body html
/*
window.onload = function(){
	document.oncontextmenu = function()
	{
	alert("mause bloqueado");
	return false;
		}
    }
*/