
export default class AdminViragok{

#list = []
#pElem

    constructor(list, pElem){
        this.#list = list;
        this.#pElem = pElem;
        this.megjelenit();
    }

    megjelenit(){

        let html=`
        <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Név</th>
      <th scope="col">Kép</th>
    </tr>
  </thead>
  <tbody id="row">
    
  </tbody>
</table>
        `;
        this.#pElem.insertAdjacentHTML("beforeend", html);

        
}