
let cards = document.querySelector(".cards");
const filteredbuttons=document.querySelector(".s");
let filteredcard=document.querySelector(".f-crd");
console.log(filteredbuttons);


// let loadMore = document.querySelector(".loadmore");
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
 
    <div class="f-crd" sytle=" height:400px;">
    <div class="fa">
      <img src="https://htmldesigntemplates.com/html/jobee/images/icons/1.png" alt="">
    </div>
 
    <div class="fc">
        <h1>LinkedIn</h1>
        <span>Full Stack Engineer</span>
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
    <a  href="./details.html?id=${el.id}" class="btn btn-primary" style=" width:250px;margin:auto;"  >LEARN MORE</a>
    <div style="margin:auto; display: flex;
    justify-content: space-around; gap:20px; padding-top:10px; ">
      <a onclick="deleteBtn(${el.id})" class="btn btn-danger" >DELETE</a>
      <a onclick="editBtn(${el.id})" class="btn btn-secondary "href="./add.html?id=${el.id}">EDİT</a>
      <a onclick="addFav(${el.id})" class="btn btn-dark" >ADD FAV</a>
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

// loadMore.addEventListener("click", function () {
//   maxlength = maxlength + 3;
//   getAllCards();
// })