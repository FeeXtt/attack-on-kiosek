import { Character } from "./characters/Characters.js";
import { Background } from "./ui/basic-utils.js";

//uchovava postavz pro hrace
const friendly = [];
//uchovava postavz pro pocitac
const enemies = [];
const background = new Background();
console.log(background);
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
    detectCollision();
    
};
const detectCollision = () => {
    friendly.map((a) => {
        enemies.map((b) => {
            Character.detectCollision(a, b);
        });
    });
    
}
const render = () => {
    // a - postava ktera je na rade
    friendly.map((a) => {
        a.draw(ctx);
    })
    enemies.map((a) => {
        a.draw(ctx);
    })
};
const getFps = () => {};


const loadData = async () => {
    const file = await fetch("./res/data/characters.json")
    const data = await file.json()
    Character.charactersData = data;
}
const preRender = () => {
    friendly.push(new Character("UnrealUrbic"));
    enemies.push(new Character("Frafticek"));
}

window.onload = async () => {
    //nacteme soubor
    await loadData();
    //prerenderujeme postavy
    preRender();
    //spustime hru
    window.requestAnimationFrame(gameLoop);
}