let menu = document.querySelector(".nav-icon");
let menuList = document.createElement("div");

menuList.innerHTML = `
    <div class="menu-list">
        <p class="close">X</p>
        <div class="content">
            <ul>
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a> </li>
                <li><a href="findjob.html">FIND A JOB</a></li>
                <li><a href="candidates.html">CANDIDATES</a></li>
                <li>
                   <a href="employers.html"> EMPLOYERS</a>
                </li>
                <li><a href="pages.html">PAGES</a></li>
                <li>BLOG
                   
                    
                </li>
                <li><a href="register.html">REGISTER</a></li>
                <li><a href="login.html">SIGN IN</a></li>
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

let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".feature-cards");

async function getAllCards() {
  let res = await axios(`http://localhost:3000/all/${id}`);
  let data = await res.data;
  cards.innerHTML = `
  <div class=f-card>
  <div class="fa">
  <div class="icon"><i class="bi bi-globe"></i></div>
  <div class="cop"><p>Linkedin</p></div>
</div>
<div class="fb">
  <div class="full"><p>Fulltime</p></div>
  <div class="private"><p>Private</p></div>
  <div class="urgent"><p>Urgent</p></div>
</div>
<div class="fc">
  <h1>${data.hh}</h1>
  <p>${data.pi}</p>
</div>
<div class="fd">
  <div class="cash"><p><span>${data.price} </span>|hr</p></div>
  <div class="apply"><p>Apply</p></div>


        </div>
      

    </div>`
    ;
}
getAllCards();
