var form = document.querySelector('form');
var usuario = document.getElementById('usuario')
var password = document.getElementById('password')
 
form.onsubmit = function(e) {

  if (usuario.value === '' || password.value === ''  ) {
    e.preventDefault();
    alert('Completá ambos datos!') ;
  } else if(!usuario.value.includes("@")){
    e.preventDefault();
    console.log(usuario.value.includes("@"))
    alert('El usuario debe contener un @') ;
  }else{
    alert('Los datos son correctos!🎉')
  }
 
}



