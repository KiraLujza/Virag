import { ViragLista } from "./adat.js";
import Virag from "./Virag.js";

export default class Viiragok{
    #lista = []
    #pElem
constructor(lista, pElem){
    this.#lista = lista;
    this.#pElem = pElem;
    this.megjelen();
}

megjelen(){
    console.log(this.#lista)
   for(let index = 0; index < this.#lista.length; index++){
    new Virag(this.#lista[index], document.querySelector("article"));
   }
        

}

}