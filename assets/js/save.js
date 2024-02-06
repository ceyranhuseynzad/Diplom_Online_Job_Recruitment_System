let BASE_URL = `http://localhost:3000/save`;
let cards = document.querySelector(".f-cards");
let searchInput = document.querySelector(".search");
let sortBtn = document.querySelector(".sort");
let sorted = "asc";
let filteredArr = [];
let copyArr = [];

async function getAllCards() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  cards.innerHTML = "";
  filteredArr = filteredArr.length || searchInput.value ? filteredArr : data;
  filteredArr.forEach((el) => {
    cards.innerHTML += `
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
            <button >LEARN MORE</button>
            <div>
              <a onclick=deleteBtn(${el.id}) >DELETE</a>
              <a onclick="editBtn(${el.id})"  href="">EDİT</a>
              <a onclick="addFav(${el.id})" >ADD FAV</a>
            </div>
          </div>
        </div>
      </div>
        `;
  });
}
getAllCards();

searchInput.addEventListener("input", function (e) {
  filteredArr = copyArr;
  filteredArr = filteredArr.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getAllCards();
});

sortBtn.addEventListener("click", function () {
  if (sorted === "asc") {
    filteredArr.sort((a, b) => a.price - b.price);
    sorted = "dsc";
    sortBtn.innerHTML = "SORT ASC";
  } else if (sorted === "dsc") {
    filteredArr.sort((a, b) => b.price - a.price);
    sorted = "def";
    sortBtn.innerHTML = "SORT DSC";
  } else {
    filteredArr = copyArr;
    sorted = "asc";
    sortBtn.innerHTML = "SORT";
  }
  getAllCards();
});

function deleteBtn(id) {
  axios.delete(`${BASE_URL}/${id}`);
}

async function addFav(cardId) {
  let res = await axios(`${BASE_URL}/${cardId}`);
  let obj = await res.data;
  axios.post(`http://localhost:3000/save`, obj);
}
