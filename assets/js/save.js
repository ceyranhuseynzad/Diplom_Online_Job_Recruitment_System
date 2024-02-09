
let cards = document.querySelector(".feature-cards");


let filteredArr = [];
let copyArr = [];

async function getAllCards() {
  let res = await axios(`http://localhost:3000/save`);
  let data = res.data;
  copyArr = data;
  cards.innerHTML = "";
  // filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    cards.innerHTML += `
    <div class="f-cards">
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
            <button >LEARN MORE</button>
            <div>
              <a onclick=deleteBtn(${el.id}) >DELETE</a>
              <a onclick="editBtn(${el.id})"  href="">EDİT</a>
              <a onclick="addFav(${el.id})" >ADD FAV</a>
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
  axios.delete(`http://localhost:3000/save/${id}`);
}

async function addFav(cardId) {
  let res = await axios(`http://localhost:3000/save/${cardId}`);
  let obj = await res.data;
  axios.post(`http://localhost:3000/save`, obj);
}
