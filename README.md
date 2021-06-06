# todo-list-vanillajs
a todo list made with vanilla javascript(una lista de cosas con javascript vanilla)

//Primero creamos una variable en JavaScript que almacene el elemento con la ID addToDo(el boton) en el HTML. luego hacemos lo mismo con la ID toDoContainer (del div que va a //contener lo que escribamos). Y por ultimo, creamos una variable que almacene el  ID inputField( vinculado con el input que vamos a usar para escribir lo que queramos).

var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

//Creamos un addEventListener asociado al boton que cuando se realice un click llama a la funcion que crea la variable paragraph que crea en el documento un p para escribir en él. //Se le agrega una clase para darle estilos y se le asigna a ese elemento el valor de lo ingresado en el input.

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    
   // Se le agrega al toDoContainer un appendChild que va a tomar por defecto el valor vacio en el input
    
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    //Se crea un addEventListener que al dar click sobre uno de los items ingresados aplica el estilo de line-through al elemento paragraph es decir que lo corta al medio una //raya. Tambien se agrega un segundo addEventListener que al hacer doble click elimina el elemento.
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });
});
Link de la aplicación
https://todo-list-vanillajs.vercel.app/
