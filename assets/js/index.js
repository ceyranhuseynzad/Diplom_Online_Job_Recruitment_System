let cards = document.querySelector(".feature-cards");
const filteredbuttons=document.querySelector(".s");
let filteredcard=document.querySelector(".f-card");
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
  let res = await axios("http://localhost:3000/all");
  let data = await res.data;
  copyArr = data;
  cards.innerHTML = "";
  // filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
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
            <a  href="./details.html?id=${el.id}" >LEARN MORE</a>
            <div>
              <a onclick=deleteBtn(${el.id}) >DELETE</a>
              <a onclick="editBtn(${el.id})" href="./add.html?id=${el.id}">EDİT</a>
              <a onclick="addFav(${el.id})"  >ADD FAV</a>
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

// loadMore.addEventListener("click", function () {
//   maxlength = maxlength + 3;
//   getAllCards();
// })