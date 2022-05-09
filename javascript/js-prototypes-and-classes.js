// class
console.log('class:');
class Character {

    static count() {
        Character.counter = (Character.counter || 0) + 1;
        return;
    }
    constructor() {
        try {
            if (this.constructor == Character) {
                throw new Error("Abstract classes can't be instantiated.");
            } else {
                Character.count();
                this.x = Math.floor(Math.random() * 11);
                this.y = Math.floor(Math.random() * 11);
            }
        } catch (error) {
            console.log(error);
        }
      }

    get position() {
        return this.x + ' ' + this.y;
      }
    set position({x, y}) {
        try {
            if(x>= 0 && x <= 10 && y >= 0 && y <= 10){
                this.x = x;
                this.y = y;
            } else {
                throw new Error ('Out of Bounds Error');
            }
        
        } catch(error){
            console.log(error);
            
        }

      }

}

class PlayerCharacter extends Character {
    constructor() {
        super()
      }
}

class NonPlayerCharacter extends Character {
    constructor() {
        super()
      }
}

let char_A = new PlayerCharacter();
console.log(char_A.position);
console.log ('counter: ' + Character.counter);

let char_B = new NonPlayerCharacter();
console.log(char_B.position);
console.log ('counter: ' + Character.counter);

let char_C = new Character();
console.log ('counter: ' + Character.counter);

console.log('set x and y');
char_A.position = ({x: 2, y:8});
console.log(char_A.position);

console.log('set x and y index out of boundaries');
char_A.position = ({x: 1, y: 11});
console.log(char_A.position);


// prototypes
const Character1 = function () {

    function count1() {
        Character1.counter1 = (Character1.counter1 || 0) + 1;
        return;
    }

        try {
            if (this.constructor == Character1) {
                throw new Error("Abstract classes can't be instantiated.");
            } else {
                count1();
                this.x = Math.floor(Math.random() * 11);
                this.y = Math.floor(Math.random() * 11);
            }
        } catch (error) {
            console.log(error);
        }

    this.getPosition = function () {
        return this.x + ' ' + this.y;
      }
    this.setPosition = function (x, y) {
        try {
            if(x >= 0 && x <= 10 && y >= 0 && y <= 10){
                this.x = x;
                this.y = y;
            } else {
                throw new Error ('Out of Bounds Error');
            }
        
        } catch(error){
            console.log(error);
        }
      }
}


const PlayerCharacter1 = function () {
    Character1.call(this);
}
Object.setPrototypeOf(PlayerCharacter1, Character1.prototype);


const NonPlayerCharacter1 = function () {
    Character1.call(this);
}
Object.setPrototypeOf(NonPlayerCharacter1, Character1.prototype);


console.log('prototypes:');

let char_A1 = new PlayerCharacter1();
console.log(char_A1.getPosition());
console.log ('counter: ' + Character1.counter1);

let char_B1 = new NonPlayerCharacter1();
console.log(char_B1.getPosition());
console.log ('counter: ' + Character1.counter1);

let char_C1 = new Character1();
console.log ('counter: ' + Character1.counter1);

console.log('set x and y');
char_A1.setPosition(2, 8);
console.log(char_A1.getPosition());

console.log('set x and y index out of boundaries');
char_A1.setPosition(-1, 9);
console.log(char_A1.getPosition());
