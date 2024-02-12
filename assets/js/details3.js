let id = new URLSearchParams(window.location.search).get("id");
let cards = document.querySelector(".cards");

async function getAllCards() {
  let res = await axios(`http://localhost:3000/all/${id}`);
  let data = await res.data;
  cards.innerHTML = `
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
      

    </div>`
    ;
}
getAllCards();
