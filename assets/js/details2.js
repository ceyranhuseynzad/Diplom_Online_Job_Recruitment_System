let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".cards");

async function getAllCards() {
  let res = await axios(`http://localhost:3000/candidate/${id}`);
  let data = await res.data;
  cards.innerHTML = `
  <div class="f-crd">
  <div class="fa">
    <img src="${data.photo}" alt="">
  </div>
  
  <div class="fc">
      <h1>${data.name}</h1>
      <span>${data.job}</span>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
  </div>
  <div class="f-b">
      <div class="p">
          <p>Figma</p>
      </div>
      <div class="p">
          <p>Java</p>
      </div>
      <div class="p">
          <p>Photoshop</p>
      </div>
  </div>
  <div class="fd">
      <div class="apply">
          <p><i class="bi bi-geo-alt"></i>Azerbaijan</p>
      </div>
      <div class="cash">
          <p><span>${data.price} </span>|hr</p>
      </div>
    
  </div>
    </div>`
    ;
}
getAllCards();
