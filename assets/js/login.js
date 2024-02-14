let menu = document.querySelector(".nav-icon");
let menuList = document.createElement("div");

menuList.innerHTML = `
    <div class="menu-list">
        <p class="close">X</p>
        <div class="content">
            <ul>
                <li>HOME</li>
                <li>ABOUT </li>
                <li>FIND A JOB</li>
                <li>CANDIDATES</li>
                <li>
                    EMPLOYERS
                </li>
                <li>PAGES</li>
                <li>BLOG
                   
                    
                </li>
                <li>REGISTER</li>
                <li>SIGN IN</li>
            </ul>
        </div>
    </div>
`;

function toggleMenuList() {
    if (window.innerWidth < 900) {
     menu.addEventListener("click",()=>{
        document.body.appendChild(menuList);
     })
    } else {
        menuList.remove();
    }
}
toggleMenuList()


window.addEventListener("resize", () => {
    toggleMenuList();
});

let close = menuList.querySelector(".close");
close.addEventListener("click", () => {
    menuList.remove();
});

const tTp = document.querySelector(".to-top")
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        tTp.classList.add("active")
    } else {
        tTp.classList.remove("active")
    }
})
document.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        navbar.style.backgroundColor = "#007aff";
        navbar.style.height = "70px";
        navbar.style.opacity = ".9"
        navbar.style.zIndex = "99"

    } else {

        navbar.style.backgroundColor = "transparent"
        navbar.style.height = "100px";



    }
})


const passwords=document.querySelectorAll("input[type='password']")
const password1=document.querySelector("#password1")
const password2=document.querySelector("#password2")
const submit=document.querySelector("#submit")
const symbols=document.querySelectorAll(".symbol")
const hidden=document.querySelectorAll(".hidden")
const input=document.querySelectorAll("input")
let obj={
    name:"",
    email:"",
    password:""
}

for(let i=0 ; i<input.length ; i++){
    input[i].addEventListener("input", () => {
        if(input[i].value.trim()!=''){
            input[i].style.outlineColor='green'
            symbols[i].innerHTML=`<i class="bi bi-plus-circle"></i>`
            symbols[i].style.color='rgb(55, 255, 0)'
            if(i==1){
                if(!input[i].value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){               
                    input[i].style.outlineColor='red'
                    symbols[i].innerHTML=`<p>email is not valid</p>`
                    symbols[i].style.color='gray'
                }
            }else if(i==2){
                if(!input[i].value.match( /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)){
                    symbols[i].innerHTML=`<p>Password must be at least 8 characters long, consisting of symbols, upper and lower case letters and a number</p>`
                    symbols[i].style.color="gray"
                }
            }else if(i==3){
                if(password1.value==password2.value){
                    obj.password=input[2].value
                }else{
                    symbols[3].innerHTML=`<i class="bi bi-x-circle"></i><p>Password not confirmed</p>`
                    symbols[3].style.color='red'
                }
            }
        }
    })
}

for (let i=0; i< input.length; i++){
    input[i].addEventListener("blur" ,() => {
        if(input[i].value==''){
            symbols[i].innerHTML=`<i class="bi bi-x-circle"></i>`
            symbols[i].style.color='red'
        }else{
            obj.name=input[0].value,
            obj.email=input[1].value
            if(password1.value==password2.value){
                obj.password=input[2].value
            }else{
                symbols[3].innerHTML=`<i class="bi bi-x-circle"></i><p>Password not confirmed</p>`
                symbols[3].style.color='red'
            }
        }
    })
}

for (let i=0; i<hidden.length; i++){
    hidden[i].addEventListener("click" ,() => {
        if(passwords[i].type==='text'){
            passwords[i].type='password'
            hidden[i].innerHTML=`<i class="bi bi-eye-slash"></i>`
        }else{
            passwords[i].type='text'
            hidden[i].innerHTML=`<i class="bi bi-eye"></i>`
        }
    })
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if(obj.name=='' && obj.email=='' && obj.password==''){
        alert("melumat dogru deyil")
    }
   else{
    axios.get("http://localhost:3000/main")
    .then(res => res.data)
    .then(data => {
        if(data.length ==0 ){
            axios.post("http://localhost:3000/main", obj)
        }else{
            data.forEach(element => {
                if(element.email==obj.email){
                    alert("eyni melumat")
                }else{
                    axios.post("http://localhost:3000/main", obj)
                    alert("ugurlu")
                }                
            })
        }
    })
   }
})

