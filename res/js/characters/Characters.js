export class Character {
  // static - dana vec naleyi/patri tride - ne objektu
  static charactersData;
  /*
   * const foo - new Character(...)
   * foo.name - name patri objektu
   *
   * kdyz dana vec patri tride - je static
   * Character.characterData - yapis vzpada takto
   * foo.charactersData - nebude fungovat
   */

  constructor(name) {
    this.name = name;
    this.img = new Image();
    this.setType(name);
    this.img.src = this.path;
    this.ratio = 0.35;
    this.size = {
      width: 336 * this.ratio,
      height: 634 * this.ratio,
    };
    this.state = 0;
    this.animationSpeed = 4;
    /* this.name - vlastnost */
    this.frame = { 
      counter: 0, 
      index: 1,
      maxIndex: 11,
      width: 100,
      height: 100,
    }
    
  }

  setType(name) {
    Character.charactersData.map((obj) => {
      if (name === obj.name) {
        this.sprites = obj.sprites;
        this.hp = obj.stats.hp;
        this.maxHp = this.hp;
        this.dmg = obj.stats.dmg;
        this.speed = obj.stats.speed;
        this.side = obj.stats.side;
        this.velocity = {
          x: obj.stats.velocity * this.speed,
        };
        this.position = {
          x: obj.stats.position,
          y: 350,
        };
        return;
      }
    });
  }

  animate(ctx) {
    ctx.drawImage()
  }
  draw(ctx) {
    ctx.save();

    if (this.side === 0) {
      this.animate(ctx);

      return ctx.restore();
    }
    ctx.translate(this.position.x + this.size.width, 0);
    ctx.scale(-1, 1);
    this.animate(ctx);
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
