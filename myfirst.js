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
var complexObjectOne = {
    "entryOne" : [1,2,3],
    "entry Two" : {
        "inside entryOne": [123,456],
        "inside entryTwo": 2,
        "inside entryThree": [{
            "inside array": 1
        }, 1]
    }
}
console.log(complexObjectOne['entry Two']["inside entryThree"][0][`inside array`]);//we can use . (dot) to access as well, but [] is used when ther's a space

//accessing and adding to complex objects
var complexObjectTwo = {
    "2001": {
        "artist": "artist1",
        "track": "track1",
        "album": "album1",
        "tracks": [1,2,3,4]  
    },
    "2002": {
        "artist": "artist2",
        "album": "album12"
    },
    "2003": {
        "artist": "artist3",
        "tracks": [5,6,7,8],
        "album": "album3"
    }
}
var copyComplexObject = JSON.parse(JSON.stringify(complexObjectTwo));
function updateComplexObjectTwo(id,prop,value){
    if(value === ""){
        delete complexObjectTwo[id][prop];
    } else if(prop === "tracks"){
        complexObjectTwo[id][prop] = complexObjectTwo[id][prop] || []; //evaluates if the first part of OR is undefined - if undefined the other part of OR is considered
        complexObjectTwo[id][prop].push(value); 
    } else{
        complexObjectTwo[id][prop] = value;
    }
}
updateComplexObjectTwo("2002","tracks",10);
updateComplexObjectTwo("2003","tracks",11);
console.log(complexObjectTwo["2002"]);
console.log(complexObjectTwo["2003"]);

//loops are used to iterate based on a condition
var myArr1 = [];
//var count = 0;
for ( var i=1; i < 25; i+=2 ){
  myArr1.push(i);
  //count++;  
}
console.log(myArr1);
var myArr2 = [];
for( var i= 25; i >0 ; i-=2){
    myArr2.push(i);
}
console.log(myArr2);
var arrSum = 0;
for( var i = 0; i<myArr2.length ; i++){
    arrSum += myArr2[i];
}
console.log(arrSum);

//lookup fcuntion for object iteration
var complexObjectThree = {
    "contact1":{
        "fn":"c1",
        "ln":"ln1",
        "number":[],
    }
}

//generate random decimal and whole numbers
console.log(Math.random());//generates a decial between 0 and 1
console.log(Math.floor(Math.random()*10));//generates a number between 0 and 10

//parsing integers
console.log(parseInt("123"));
console.log(parseInt("notnumber"));//return NaN
console.log(parseInt("100",2));//radix calculation - i.e. example base 2

//ternary operator
function nestedTernary(n){
    return n>0?"positive":n<0?"negative":"Zero";
}
console.log(nestedTernary(5));

//difference between let and var. what is const?
// - let doesn't allow for duplicate variable names in the same scope
// use strict; is the first line in a js file or method used to evaluate the variable declaration and initialization
//let has a scope of blocks inside which it was declared, whereas var has global scope
function checkScope(){
    "use strict";
    var i = "varScope";
    {
        let i = "new block let scope";
        console.log(i);
    }
    console.log(i);
}
checkScope();
//const is all features of let and read-only. CAPITALIZE constants in your code
//in your code mainly use const and let. rarely use var
//Object mutation is possible even if you declare an array/Object as a constant
function mutateObj(){
    const MATH_PI = {
        "value" : 3.14
    }
    MATH_PI.value = 99;
    console.log(MATH_PI.value);
}mutateObj();
//Objects and arrays can be froze by using Object.freeze()
function mutateObjFreeze(){
    try{
        const MATH_PI = {
        "value" : 3.14
        }
        Object.freeze(MATH_PI);
        MATH_PI.value = 99;
        console.log(MATH_PI.value);
    }catch(exception){
        console.log("Cannot Edit a Constant")
    }
    
}mutateObjFreeze();

//Anonymous functions
var methodName = function(){
    return new Date();
}
console.log(methodName());
//the below code means the same using arrow functions
const methodNameDiff = () => new Date();
console.log(methodNameDiff());
//arrow functions could be used with params as well
const methodNameDiffParam = (arr1,arr2) => arr1.concat(arr2);
console.log(methodNameDiffParam([1,2],[4,3]));
//we could use functions as parameters
const testarr = [3,3.14,6,19,37.5,14.4,15];
const squareList = inputarr => {
    let resultArr = inputarr.filter(num => Number.isInteger(num)&&num>0).map(rn => rn=rn*rn);//filter function filters based on the method definition passed in and map function operates on the result of filter 
    console.log(resultArr);
}
squareList(testarr);
//default parameters, high value functions
const checkDefault = (() => {
    return function checkDefault(val1, incr =1){
        return val1+incr;
    };
})();
console.log(checkDefault(2,3));
console.log(checkDefault(2));
//rest operator is used to accept variable number of arguments
const testRest = (() => {
    return function testRest1(...rst){
      return rst.reduce((a,b)=>a+b,0);  
    };
}
)();//function is declared and called immediately
console.log(testRest(1,2,23,3));

//spread operator to copy the elements of one array to another
const actarray = ["1","2","3"];
(() =>{
    let arrcopy = [...actarray];
    arrcopy[0] = "copy";
    console.log(arrcopy);
    console.log(actarray);  
})();

//destructring object
const destObjExmpl = { x:10,y:20,z:30};
//to directly read and assign values
const {a:y}=destObjExmpl; //read the value y from destObjExmpl and assign it to a
console.log(a);

//destrcuturing nested object 
const destNestedObj = { x: {min:10,max:40},y:20,z:30};
const { x : {max : maxNestObj }} = destNestedObj;
console.log(maxNestObj);

//destructuring arrays
const [l,m,,,n] = [1,2,3,4,5,6];
console.log(n);

//using destructuring to swap variable values
let o=1, p=2;
[o,p]=[p,o];
console.log(p);

//using destructuring and rest operator together
const desRest = [1,2,3,4,5,6,7,8,9];
const [ , , ...remarr] = desRest;
console.log(remarr);
const [r,s,...remremarr] = remarr;
console.log(remremarr);
console.log(s);

//destructuring to pass or get only the values that we need
const desparamex = {
    "min" : 10,
    "max" : 15,
    "name": "Oregon",
    "type": "state"
}
function demoDesParam({min, max}){
    return min+max/2;   
}
console.log(demoDesParam(desparamex));
