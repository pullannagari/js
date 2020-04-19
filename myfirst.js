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

// switch statements
function checkSwitch(value){
    switch(value){
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case "1":
            console.log("string one")
            break;
        default:
            console.log("no match")
    }
}
checkSwitch("2");

//return condition evaluation directly
function evalDirect(p,q){
    return p < q;
}
console.log(evalDirect(10,20));

//return undefined
function returnUndefined(){
    return undefined;//same as return; (without undefined key word)
}
console.log(returnUndefined());

//js objects and access
var testObject = {
    "first entry":"1",
    "second entry":2
}
console.log(testObject["first entry"]);//objects with values having space should be accessed through []
console.log(testObject['second entry']);

//accessing object properties thorugh variables
var testVariableObject = {
    1:"one",
    2:"two",
    "three":"3"
}
var first = 1;
var third = "three";
console.log(testVariableObject[third]);
console.log(testVariableObject[first]);

//updating and adding and deleting properties
var updateProperties = {
    1:"one",
    2:"two"
}
updateProperties[1]="ONE";
console.log(updateProperties);
updateProperties.three = "new three";
console.log(updateProperties.three);
delete updateProperties[2];
console.log(updateProperties);
delete updateProperties.three;
console.log(updateProperties);

//objects to be used as lookup
var lookupObject = {
    "a" : "A",
    "b" : "B",
    "c" : "C"
}
var alphabet = "a";
console.log(lookupObject[alphabet]);

//checking for object properties using hasOwnProperty
function checkObjProp(prop){
    if(lookupObject.hasOwnProperty(prop)){
        return lookupObject[prop];
    }else{
        return "Not Found!";
    }
}
console.log(checkObjProp("a"));

//accessing nested obects
var complexObject = {
    "entryOne" : [1,2,3],
    "entry Two" : {
        "inside entryOne": [123,456],
        "inside entryTwo": 2,
        "inside entryThree": [{
            "inside array": 1
        }, 1]
    }
}
console.log(complexObject['entry Two']["inside entryThree"][0][`inside array`]);//we can use . (dot) to access as well, but [] is used when ther's a space
