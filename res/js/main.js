import { Character } from "./characters/Characters.js";
import { Background } from "./ui/basic-utils.js";

const background = new Background();
console.log(background);

const frafta = new Character("Frafta", 10000, 1, 4, 0);
const unrealurbic = new Character("Urban", 10000, 1, 0.2, 1);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")



const keys = {}
//space:true
// space: false
document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
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
const update = () => {
    frafta.update(0)
    unrealurbic.update(0)
   /*if (frafta.position.x >= 640){
        frafta.update(1)
        frafta.hp -= 100;
        if (frafta.hp <= 0) {
            frafta.update(2)
            
        }
    }
    else {
        frafta.update(0)
    }*/
    
};
const render = () => {
    frafta.draw(ctx);
    unrealurbic.draw(ctx);
};
const getFps = () => {};
window.onload = () => {

    window.requestAnimationFrame(gameLoop);
}