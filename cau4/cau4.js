class Animal{
    name;
    weight;
    constructor(name, weight){
        this.name = name;
        this.weight = weight;
    }
    setName(name){
        this.name = name;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    toString(){
        document.write(`Name: ${this.name}<br>Weight: ${this.weight}`)
    }
}
let objAnimal1 = new Animal();
objAnimal1.setName('Elephant');
objAnimal1.setWeight('45.6');

let objAnimal2 = new Animal();
objAnimal2.setName('Mouse');
objAnimal2.setWeight('10');
objAnimal2.toString();