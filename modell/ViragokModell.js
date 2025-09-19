import { ViragLista } from "../adat.js";

export default class ViragokModell{

    #viraglista = []

    constructor(){
        this.#viraglista = ViragLista;
    }

    getLista(){
        return JSON.parse(JSON.stringify(this.#viraglista));
    }

    kedvencModosit(id){

            let obj = this.#viraglista.find(elem => elem.id == id);
            obj.kedvenc = true;
            console.log(this.#viraglista);
    }
}