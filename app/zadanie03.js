//Twój kod
var result = 0;
var newArr = [];
function getNumber(num){
    return newArr.push(num)
}
var list = process.argv.map(getNumber);
for (i = 2; i < newArr.length; i++){
 result += Number(newArr[i])
}

console.log(result);