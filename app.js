const d = document;

const $add = d.querySelector(".add"),
$fondo = d.querySelector(".hero"),
$popup = d.querySelector(".popup"),
$close = d.querySelectorAll(".close"),
$agregarItem = d.querySelector(".add-todo");
const $ul = d.createElement("ul");
const $default = d.querySelectorAll(".default");
const form = d.querySelector("form");
const $more = d.querySelector(".more");
const $details = d.getElementById("details");
const $lis = d.querySelectorAll("li");
const $completed = d.querySelector(".completed");

d.addEventListener("click", (e)=>{
    if(e.target === $add || e.target === `${$add} *`) $popup.classList.remove("none");
})
d.addEventListener("click", (e)=>{
    $close.forEach((close)=>{
        if(e.target === close) close.parentElement.classList.add("none");
    })
    
})
d.addEventListener("click", (e)=>{
    if (e.target.classList.contains("more")) {
        $details.classList.remove("none");
        const spanClose = d.createElement("span");
        spanClose.textContent = 'X';
        spanClose.classList.add("close", "index")
        
        const liElement = e.target.parentElement; 
        const description = liElement.nextSibling; 
        const $icono = liElement.textContent.substring(0,1);
        const title = liElement.textContent; 
        const descText = description.textContent;
        const $popupContent = d.querySelector("#details"); 
        //<span class='complete'></span><span class='delete'></span>
        $popupContent.innerHTML = `
        <h2>${$icono}</h2>
        <h3>${title.substring(0, title.length-2)}</h3> 
        <p>${descText}</p>`;
        $popupContent.appendChild(spanClose);
        spanClose.addEventListener("click", () => {
            $details.classList.add("none");
        });
    }
})

d.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        const father = e.target.parentElement;
        father.remove();
        $fondo.classList.remove("none");
    }
    if(e.target.classList.contains("complete")){
        const elemento = e.target.parentElement;
        const lista = $completed.querySelector("ul");
        lista.appendChild(elemento);
        $completed.classList.remove("none");
    }
})
let id = 0; 
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const $titulo = formData.get("titulo");
    const $option = formData.get("option");
    const $description = formData.get("text");
    const $spanBtn = d.createElement("span");
    const $checkBtn = d.createElement("span");
    const $deleteBtn = d.createElement("span");
    $spanBtn.innerHTML = ' > ';
    $checkBtn.innerHTML = '✅';
    $checkBtn.classList.add("complete");
    $deleteBtn.innerHTML = '🗑️';
    $deleteBtn.classList.add('delete');
    $spanBtn.classList.add("more")
    const lititle = d.createElement("li");
    lititle.textContent = `${$option} --- ${$titulo} `;
    lititle.appendChild($spanBtn);
    lititle.appendChild($checkBtn);
    lititle.appendChild($deleteBtn);
    lititle.setAttribute("id", `${id}`);
    const lidescr = d.createElement("li");
    lidescr.classList.add("none")
    lidescr.textContent =`${$description}`
    $ul.appendChild(lititle);
    $ul.appendChild(lidescr);

    $fondo.appendChild($ul);
    $default.forEach( (def) =>{
        def.classList.add("none");
    })
    $popup.classList.add("none");
    id++;
})
//ML hackerrank balanced burguer