let person = { 
    name: "Dovakin",
    universe: "Skyrim",
    occupation: "dragon slayer",
    powers: [
        {type: "magic", power: "healing", description: "Надає змогу лікувати себе та союзників."},
        {type: "shouts", power: "Unrelenting Force (Fus Ro Dah)", description: "Відштовхує ворогів, збиваючи їх з ніг."},
        {type: "shouts", power: "Dragonrend (Joor Zah Frul)", description : "Примушує драконів сісти, роблячи їх уразливими."},
        {type: "transform", power: "Werewolf Transformation", description : " Перетворення на вовкулаку через союз із Компаньйонами."},
    ],

    introduce: () => {
        console.log(`Привіт, я ${person.name}.`);
    }
}
console.group("Person Information");
console.log(person.name);
console.log(person.universe);
console.log(person.occupation);
console.log(person.powers);
console.groupEnd();


person.introduce();

let personSerialized = JSON.stringify(person);

console.log(personSerialized);

let personDeSerialized = JSON.parse(personSerialized);
console.log(personDeSerialized);

delete person.occupation;

console.log(person);

console.log("name" in person);
console.log(person.hasOwnProperty("occupation"));