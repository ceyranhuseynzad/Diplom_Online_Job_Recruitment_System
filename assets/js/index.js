let menu = document.querySelector(".nav-icon");
let menuList = document.createElement("div");

menuList.innerHTML = `
    <div class="menu-list">
        <p class="close">X</p>
        <div class="content">
            <ul >
                <li><a href="index.html">HOME</a></li>
                <li><a href="about.html">ABOUT</a> </li>
                <li><a href="findjob.html">FIND A JOB</a></li>
                <li><a href="candidates.html">CANDIDATES</a></li>
                <li>
                   <a href="employers.html"> EMPLOYERS</a>
                </li>
                <li><a href="pages.html">PAGES</a></li>
                <li>BLOG
                <li><a href="add.html">ADD</a></li>
                <li><a href="save.html">FAV</a></li>
                
                    
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




let cards = document.querySelector(".feature-cards");
const filteredbuttons=document.querySelector(".s");
let filteredcard=document.querySelector(".f-card");



let loadMore = document.querySelector(".loadmore");
let maxlength = 3;

let filteredArr = [];
let copyArr = [];


async function getAllCards() {
  let res = await axios("http://localhost:3000/all");
  let data = await res.data;
  copyArr = data;
  cards.innerHTML = "";
  //filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr=data;
  filteredArr.slice(0, maxlength).forEach((el) => {
    cards.innerHTML += `
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
    <h1>${el.hh}</h1>
    <p>${el.pi}</p>
  </div>
  <div class="fd">
    <div class="cash"><p><span>${el.price} </span>|hr</p></div>
    <div class="apply"><p>Apply</p></div>

  
          </div>
          <div class="ft">
          <a  href="./details.html?id=${el.id}" class="btn btn-primary" style=" width:250px;margin:auto;"  >LEARN MORE</a>
          <div style="margin:auto; display: flex;
          justify-content: space-around; gap:20px; padding-top:10px; ">
            <a onclick=deleteBtn(${el.id}) class="btn btn-danger" >DELETE</a>
            <a onclick="editBtn(${el.id})" class="btn btn-secondary "href="./add.html?id=${el.id}">EDİT</a>
            <a onclick="addFav(${el.id})" class="btn btn-dark" >ADD FAV</a>
          </div>
          </div>
</div>
        </div>
      </div>
      </div>
        `;
  });
}
getAllCards();





function deleteBtn(id) {
  axios.delete(`http://localhost:3000/all/${id}`);
  window.location.reload()
}

async function addFav(cardId) {
  let res = await axios(`http://localhost:3000/all/${cardId}`);
  let obj = await res.data;
  axios.post(`http://localhost:3000/save`, obj);
}

 loadMore.addEventListener("click", function () {
   maxlength = maxlength + 3;
   getAllCards();
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
        nums.textContent = start + "K+";
        if (start == end) {
            clearInterval(count)
        }
    }, dur);
})