/* var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });
}); */


const d = document;

const $add = d.querySelector(".add"),
$fondo = d.querySelector(".hero"),
$popup = d.querySelector(".popup");


d.addEventListener("click", (e)=>{
    if(e.target === $add || e.target === `${$add} *`){
        $popup.classList.remove("none");
    }
})