

export class Character {

    constructor(name, hp, dmg, speed, type,) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.speed = speed;
        this.img = new Image();
        this.setType(type)
        this.img.src = this.path;
        this.ratio = 0.35;
        this.size = {
            width: 336 * this.ratio,
            height: 634 * this.ratio
            
        };
        this.position = {
            x:0,
            y:350,
        };
        
        /* this.name - vlastnost */
    }

    setType(type) {
        const charactersType = [
            "./res/img/fraftik4brady.png"
        ]
        this.path = charactersType[type];
    }
    draw(ctx){
        
        ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height)
    }
    update(state){
        switch(state){
            case 0:
                this.position.x += 0.5;
                break;
            case 1:
                this.position.x += 0;
                console.log(this.name + " attacks!")
                break;
            case 2:
                console.log(this.name + " died!")
                this.position.x = 0;
                this.hp = 10000;
                break;
            default:
        }
        
    }
        
    

}
// this - slovo ktere ukayuje na dany objekt uvnitr tridy
// kopie sablony - objekt = instance\
//funkce - stoji sama o sobe
//metoda - take funkce, ale patri k nejakemu objektu
//constructor - metoda ktera se vola kdyz vytvorime instanci od tridy
