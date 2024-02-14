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
let num = document.querySelectorAll(".num")
console.log(num);
let interval = 2000;
num.forEach((nums) => {
    let start = 0
    let end = parseInt(nums.getAttribute("data-val"))
    let dur = Math.floor(interval / end)

    let count = setInterval(function () {
        start += 1;
        nums.textContent = start + "+";
        if (start == end) {
            clearInterval(count)
        }
    }, dur);
})

