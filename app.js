const d = document;

const $add = d.querySelector(".add"),
$fondo = d.querySelector(".hero"),
$popup = d.querySelector(".popup"),
$close = d.querySelector(".close"),
$agregarItem = d.querySelector(".add-todo");
const $ul = d.createElement("ul");
const $default = d.querySelectorAll(".default");
const form = d.querySelector("form");
const $more = d.querySelector(".more");
const $details = d.getElementById("details");
const $lis = d.querySelectorAll("li");
d.addEventListener("click", (e)=>{
    if(e.target === $add || e.target === `${$add} *`) $popup.classList.remove("none");
})
d.addEventListener("click", (e)=>{
    if(e.target === $close) $close.parentElement.classList.add("none");
})
d.addEventListener("click", (e)=>{
    if(e.target === $more){
        console.log("El click funciona")
        $details.classList.remove("none");
        const span1 = d.createElement("span");
        const span2 = d.createElement("span");
        $lis.forEach((li)=>{
            console.log(li);
            //span1.textContent = 
        })
         
    }
})
//<i class="fa-solid fa-circle-chevron-right"> > </i>
let id = 0; 
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(form);
    const $titulo = formData.get("titulo");
    const $option = formData.get("option");
    const $description = formData.get("text");
    const $spanBtn = d.createElement("span");
    $spanBtn.innerHTML = ' > ';
    $spanBtn.classList.add("more")
    const lititle = d.createElement("li");
    lititle.textContent = `${$option} --- ${$titulo} `;
    lititle.appendChild($spanBtn);
    lititle.setAttribute("id", `${id}`);
    const lidescr = d.createElement("li");
    lidescr.classList.add("none")
    lidescr.textContent =`${$description}"`
    $ul.appendChild(lititle);
    $ul.appendChild(lidescr);

    $fondo.appendChild($ul);
    const barra = d.createElement("hr")
    $fondo.appendChild(barra);
    $default.forEach( (def) =>{
        def.classList.add("none");
    })
    $popup.classList.add("none");
    id++;
})
//ML hackerrank balanced burguer