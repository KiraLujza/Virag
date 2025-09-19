export default class Virag {
  #obj = {};
  #pElem;
  #gomb;

  constructor(obj, pElem) {
    this.#obj = obj;
    this.#pElem = pElem;
    console.log(this.#obj);
  this.megjelen();
  
  this.#gomb = document.getElementById(this.#obj.id);
  this.esemeny();
  }

  megjelen() {
    let html = `
            <div class="card" style="width: 18rem;">
            <img src="${this.#obj.kep}" class="card-img-top" alt="${
      this.#obj.nev
    }">
            <div class="card-body">
                <p class="card-text">${this.#obj.nev}</p>
                <button id="${this.#obj.id}" aria-label="Mark ${this.#obj.nev} as favorite">Kedvenc <span aria-hidden="true">❤️</span></button>
            </div>
            </div>
    `;

    this.#pElem.insertAdjacentHTML("beforeend", html);
  }

  esemeny() {
    
    console.log(this.#obj.id, "katt");
    this.#gomb.addEventListener("click", () => {
      let esemeny = new CustomEvent("kivalaszt", { detail: this.#obj.id });
      window.dispatchEvent(esemeny);
    });
  }
}
