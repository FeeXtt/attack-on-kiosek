export class Character {
  constructor(name, hp, dmg, speed, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.speed = speed;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.ratio = 0.35;
    this.size = {
      width: 336 * this.ratio,
      height: 634 * this.ratio,
    };
    this.position = {
      x: 100,
      y: 350,
    };
    this.velocity = {
      x: 1 * this.speed,
    };
    this.side = 0;

    /* this.name - vlastnost */
  }

  setType(type) {
    const charactersType = [
      "./res/img/characters/fraftik4brady.png",
      "./res/img/characters/unrealurbic.png",
    ];
    this.path = charactersType[type];
  }
  draw(ctx) {
    ctx.save();
    
    if (this.side === 0) {
      ctx.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.size.width,
        this.size.height,
      );
      return ctx.restore();
    }
      ctx.translate(this.position.x + this.size.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(
        this.img,
        0,
        this.position.y,
        this.size.width,
        this.size.height,
      );
    ctx.restore();
  }
  update(state) {
    switch (state) {
      case 0:
        this.move();
        break;
      case 1:
        this.position.x += 0;
        console.log(this.name + " attacks!");
        break;
      case 2:
        console.log(this.name + " died!");
        this.position.x = 0;
        this.hp = 10000;
        break;
      default:
    }
  }

  move() {
    this.position.x += this.velocity.x;
    if (this.position.x >= 1100) {
      this.velocity.x *= -1;
      this.side = 1;
    }
    if (this.position.x <= 90) {
      this.velocity.x *= -1;
      this.side = 0;
    }
  }
}
// this - slovo ktere ukayuje na dany objekt uvnitr tridy
// kopie sablony - objekt = instance\
//funkce - stoji sama o sobe
//metoda - take funkce, ale patri k nejakemu objektu
//constructor - metoda ktera se vola kdyz vytvorime instanci od tridy
