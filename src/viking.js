// Soldier
class Soldier {
    constructor(health,srength){
        this.health = health;
        this.strength = srength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name = name;
    }
    receiveDamage(damage){
         this.health = this.health - damage;
         if(this.health > 1){
            return `${this.name} has received ${damage} points of damage`
         }else if(this.health < 1){
            return `${this.name} has died in act of combat`
         }
    }
}

// Saxon
class Saxon {}

// War
class War {}
