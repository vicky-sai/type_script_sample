var converter = function(funcRef) {
    var result = funcRef;
    return result;
}



var tempConverter = (faren)=>5/9*faren-32;
var yenToInr = (yen)=>yen*0.64;

console.log(converter(()=>45));
console.log(converter(yenToInr(()=>100)));

console.log(converter(()=>100));
