import Viragok from "../view/public/Viragok.js";
import ViragokModell from "../modell/ViragokModell.js";
    
export default class ViragokController 
{
    #viragokModel = []
    #viraglista = []
    #szuloElem;

    constructor()
    {
        this.#viragokModel = new ViragokModell();
        this.#viraglista = this.#viragokModel.getLista();
        this.#szuloElem = document.querySelector("article");

        this.#szuloElem.innerHTML = "";

        new Viragok(this.#viraglista, this.#szuloElem)

        this.esemenykezelo();
    }

    esemenykezelo()
    {
        window.addEventListener("kivalaszt", (event)=>{
            console.log(event.detail)
            console.log(this.#viraglista)
            this.#viragokModel.kedvencModosit(event.detail);
        });
    }
    
    
}