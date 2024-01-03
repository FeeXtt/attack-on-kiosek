import { Character } from "./characters/Characters.js";
import { Background } from "./ui/basic-utils.js";

const background = new Background();
console.log(background);

const myCharacter = new Character("Urban", 100, 5, 0.5);
const myCharacter2 = new Character("Pepa", 100, 5, 1,)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

const person = {
    name: "Urban",
    hp: 50,
    mana: 40,
}

const keys = {}
//space:true
// space: false
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
/* js objekt
// js objekt - {}
//klic: hodnota
const urban = {
    hp: 1000,
    as: 0.01,
    dmg: 1,
    speed: 0.1,
}
console.log(urban.hp);
urban.hp -= 500;
console.log(urban.hp); 


//vlastnosti objektu = atributy
*/

/* pole
// [] - pole
const = [5,12];
// index - poradove cislo v pole - jde od 0
// index          0       1        2     3   4   5      6
const names = ["Pepa", "Radek", "Radim", 5 , 8 , 9, "Novak"]
console.log(names[2]); //Radim
console.log(names[4]); //8
names[4] = "Honza" // 
console.log(names[4]); //Honza
*/

const gameLoop = () => {
    // resize canvas
    resizeCanvas();
    //cleare canvas
    clearCanvas();
    // update
    update();
    // render animaci
    render();  
    // fps
    getFps();
    window.requestAnimationFrame(gameLoop);
}

const resizeCanvas = () => {
    canvas.width = 1280;
    canvas.height = 720;
};
const clearCanvas = () => {
    background.draw(ctx);
};
const update = () => {};
const render = () => {};
const getFps = () => {};

window.onload = () => {

    window.requestAnimationFrame(gameLoop);
}