import { ViragLista } from "../adat.js";
export default class ViragSor{

#obj= {}
#pElem

    constructor(obj, pElem){

        this.#obj = obj;
        this.#pElem = pElem;
        this.megjelenit();
    }

    megjelenit(){

        let html = `

 
    <tr>
      <th scope="row">1</th>
      <td>${this.#obj.id}</td>
      <td>${this.#obj.nev}</td>
      <td><img src="${this.#obj.kep}" alt="${this.#obj.nev}"></td>
    </tr>


        `;
         this.#pElem.insertAdjacentHTML("beforeend", html);
    }

}