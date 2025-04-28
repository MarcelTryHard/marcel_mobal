var meuFormulario = document.getElementById("form");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  var nome= document.getElementById("nome").value;

  var sobrenome =document.getElementById("sobrenome").value ;

  var senha = Number(document.getElementById("senha").value);



  if ( nome == "marcel" &&
       sobrenome == "castanha" &&
     senha === 123 ) {

    console.log("login correto");

  } else {

    alert("Olha, você digitou seu login errado, tente novamente");
    console.log("login errado");
  }

});