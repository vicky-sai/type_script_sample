let [bookName, author] = ["Head first Java","kathySiera"];

console.log(bookName);
console.log(author);

let [prefBooks,...details] = ["Head first Java","kathySiera","450.00","O'Reily"];

console.log(prefBooks);
console.log(details);

let [,,...other] = ["Head first Java","kathySiera","450.00","O'Reily"];

//console.log(other);
//console.log(details);
console.log(other);

let project = {"code":"CUB",'name':'e-passbook','manager':'Gokul'}

let manager = {"teamLead":"Ram"};
let clone = Object.assign(project,manager);


console.log(project);
console.log(clone);
console.log(manager);
