import Virag from "./view/public/Virag.js";
import { ViragLista } from "./adat.js";
import Viragok from "./view/public/Viragok.js";
import ViragokController from "./controller/ViragokController.js";


new Viragok(ViragLista, document.querySelector("article"));
new ViragokController();

const viragBtn = document.getElementById("virag");
if (viragBtn) {
    viragBtn.addEventListener("click", () => {
        new ViragokController();
    });
}
