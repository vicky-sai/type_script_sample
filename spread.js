function printName(firstName,lastName) {
    return (firstName+lastName).toUpperCase();
}

let name = ["ramesh","kumar"];
let result = printName(...name);

console.log(result);