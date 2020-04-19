var a;
console.log(a);
a = 10;
var b = a +10;
b+=10;
console.log(b/=2);

//new block of code
var firstString = "hello";
var secondString = "check\ffor form feed"
console.log(secondString);
console.log(firstString+=secondString);
console.log(firstString+=secondString.length);

//new block of code for functions ans sting manipulations
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result = "The " + myAdjective + myNoun + myAdverb + myVerb ;
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));

//new block of code for array creation and manipulation
var firstArray = [1,"two",3,"four"];
console.log(firstArray[1]);
firstArray[1] = 2;
console.log(firstArray[1]);
//push
firstArray.push("5");
console.log(firstArray);
//pop
firstArray.pop();
console.log(firstArray);
//shift
firstArray.shift();
console.log(firstArray);
//unshift
firstArray.unshift("One");
console.log(firstArray);

//fucntions usinf arrays and array manipulations
function simulateQueue(arr,item){
    arr.push(item);
    arr.shift();
    return arr;
}
var arrQueue = [1,3,5,7,9];
console.log(arrQueue);
console.log(JSON.stringify(simulateQueue(arrQueue,11)));
