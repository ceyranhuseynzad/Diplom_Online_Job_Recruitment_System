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




let cards = document.querySelector(".cards");
const filteredbuttons=document.querySelector(".s");
let filteredcard=document.querySelector(".f-crd");
console.log(filteredbuttons);


let loadMore = document.querySelector(".loadmore");
let maxlength = 3;

let filteredArr = [];
let copyArr = [];
// const filteredCard =e=> {
//   document.querySelector(".active").classList.remove("active")
//   e.target.classList.add("active");
//   filteredcard.forEach(card=>{
//     card.classList.add("hide");
   
//     if(card.dataset.name===e.target.dataset.name||e.target.dataset.name==="all"){
//       card.classList.remove("hide");
//     }

//   });

// };
// filteredbuttons.forEach(button=>button.addEventListener("click",filteredCard));

async function getAllCards() {
  let res = await axios("http://localhost:3000/employers");
  let data = await res.data;
  copyArr = data;
  cards.innerHTML = "";
  // filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr=data;
  filteredArr.slice(0, maxlength).forEach((el) => {
    cards.innerHTML += `
 
    <div class="f-crd" sytle=" height:400px; gap:30px;">
  <div class="fa">
    <img width="60px" src="${el.img}" alt="">
  </div>

  <div class="fc">
      <h1>${el.name}</h1>
      <span>${el.job}</span>
      <div class="bibi">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
      </div>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </div>
  <div class="f-b">
      <div class="t">
          <p><i class="bi bi-geo-alt"></i>Chikago,US</p>
      </div>
      <div class="t">
          <p>Software</p>
      </div>
     
  </div>
  <div class="fd">
      <div class="apply1" >
          <p>18 Job Open</p>
      </div>
     
    
  </div>
      

    
    <div class="ft" >
    <a  href="./details3.html?id=${el.id}" class="btn btn-primary" style=" width:250px;margin:auto;"  >LEARN MORE</a>
    <div style="margin:auto; display: flex;
    justify-content: space-around; gap:20px; padding-top:10px; height:50px;width:70px; ">
      <a onclick="deleteBtn(${el.id})" class="btn btn-danger" >DELETE</a>
      <a onclick="editBtn(${el.id})" class="btn btn-secondary "href="./add3.html?id=${el.id}">EDİT</a>
      <a onclick="addFav(${el.id})" class="btn btn-dark" > FAV</a>
    </div>
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
  axios.delete(`http://localhost:3000/employers/${id}`);
  window.location.reload()
}

async function addFav(cardId) {
  let res = await axios(`http://localhost:3000/employers/${cardId}`);
  let obj = await res.data;
  axios.post(`http://localhost:3000/save3`, obj);
}

 loadMore.addEventListener("click", function () {
  maxlength = maxlength + 3;
  getAllCards();
 })