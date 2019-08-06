function sumNumber(...numbers) {
    let sum = 0;

    numbers.forEach(eachNumber => sum+=eachNumber);
    return sum;
}

let sumOfOneToFive = sumNumber(1,2,3,4,5);
console.log(sumOfOneToFive);

let sumOfEightToTen = sumNumber(8,9,10);
console.log(sumOfEightToTen);