// Creating Array
///////////////////////
const numbers = [1, 2, 3];
console.log(numbers);

//using construct array
const moreNumbers = new Array(5); //[]
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1, 2); // of(pass generate numbers)
console.log(yetMoreNumbers);

const iterablesArray = Array.from([1, 2, 3]);
const iterablesArray = Array.from("Hi!"); //split ['h' ,'i' ,'!']
console.log(iterablesArray);

const listItems = document.querySelectorAll("li");
console.log(listItems); //NodeList =>array Like Object "iterables"
const arrayListItems = Array.from(listItems); // convert NodeList to Array
console.log(arrayListItems); // NodeList Like Array

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Which Data Can You Store In Arrays?
//////////////////////////////////////////

const hobbies = ["sport", "eating"];
const personalData = [20, "Max", { moreDetails: [] }];
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1]
];
for (data of analyticsData) {
  for (const dataPoints of data) {
    console.log("dataPoint =>" + dataPoints); // print number of multi dimension
  }
}
console.log(personalData[1]); //Max
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// push(), pop(), unshift(), shift() - Adding & Removing Elements
/////////////////////////////////////////////////////////////////

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading"); // added element at end array
hobbies.unshift("Coding"); // added element at start array
const poppedValue = hobbies.pop(); //remove element in end array
hobbies.shift(); //remove element at start array
console.log(hobbies);

const hobbies = ["Sports", "Cooking"];
hobbies[1] = "Coding";
console.log(hobbies);
hobbies[5] = "Reading"; // empty X3  rarely used
console.log(hobbies, hobbies[4]); //undefined
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  The splice() Method
/////////////////////////////////////////

hobbies.splice(0, 0, "Good Food"); //index=0 ,Not Delete anyone = 0
console.log(hobbies); // GoodFood will be in first element in array
hobbies.splice(1, 0, "Good Food"); // shifted the second element
console.log(hobbies); //  Good Food will be  in second element

const removeElements = hobbies.splice(0, 1); //removing the element[0]  , 1 => one element
console.log(hobbies); // sporting is deleted
hobbies.splice(-1, 1);
hobbies.splice(0); //removing all array

console.log(hobbies);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Selecting Ranges & Creating Copies with slice()
////////////////////////////////////////////////////////

const testResult = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResult.slice()); // make copy of array
const storeResults = testResult; //pointer ref to the original array "the same address"
// testResult.push(5.91);
console.log(storeResults, testResult);

const storeResults = testResult.slice(); // copy of original array
const storeResults = testResult.slice(0, 2); //start include end no index 2   [1 , 5.3]
const storeResults = testResult.slice(-3, -1); // [10.99 ,-5]
const storeResults = testResult.slice(1.5); //[1.5, 10.99, -5, 10]
testResult.push(5.91);
console.log(storeResults, testResult);

//////////////////////////////////////////////////////////////////////////////////////
//  Adding Arrays to Arrays with concat()
/////////////////////////////////////////

const concatResults = testResult.concat([3.99, 2]); //concat 3.99 ,2 in result array and copy new array
console.log(concatResults); //  [1, 5.3, 1.5, 10.99, -5, 10,3.99, 2];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Retrieving Indexes with indexOf() /& lastIndexOf()
///////////////////////////////////////////////////////

const testResult = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
console.log(testResult.indexOf(1.5)); //2 =>start searching form left
console.log(testResult.lastIndexOf(1.5)); //4 =>start searching form right

const personalData = [{ name: "Max" }, { name: "Manuel" }];
// object are reference
console.log(personalData.indexOf({ name: "Manuel" })); //-1 didn't find any entry = -1
// Because object is reference value

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Finding Stuff: find() and findIndex()
///////////////////////////////////////////////////////

const personalData = [{ name: "Max" }, { name: "Manuel" }];
const manuel = personalData.find((person, index, persons) => {
  return person.name === "Manuel";
}); // the same object
console.log(manuel); //{name:'Manuel'}
manuel.name = "Anna"; // change value in object manuel
console.log(manuel, personalData); // same abject will changed
const maxIndex = personalData.findIndex((person, index, persons) => {
  return person.name === "Max";
});
console.log(maxIndex); // 0

/////////////////////////////////////////////////////////////////////////////
// Is it Included?
////////////////////////
const testResult = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
console.log(testResult.includes(10.99)); // true
// The Same fun includes equal condition in indexOf function
console.log(testResult.indexOf(10.99) !== -1); //true

/////////////////////////////////////////////////////////////////////////////
// Alternative to for Loops: The forEach() Method
/////////////////////////////////////////////////////
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
// for (const price of prices) {
//     taxAdjustedPrices.push(price * (1 + tax));
// }

// using when transform to new  array created
prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
  // taxAdjustedPrices.push(price * (1 + tax));
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);

//////////////////////////////////////////////////////////////////////////////////
//  Transforming Data with map()
/////////////////////////////////

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// transform every element in prices array to priceObj
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
}); // map must be return something
console.log(taxAdjustedPrices);

///////////////////////////////////////////////////////////////////////////////////
//  sort()ing and reverse()ing
////////////////////////////////
const prices = [10.99, 5.99, 3.99, 6.59];
// "Only first Character is compared by default  10 > 3 but 1 < 3"
console.log(prices.sort()); // convert every thing in string  [10.99 , 3.99 , 5.99 , 6.59]

const storedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
}); // converting any element to string
function reverseLogic(a, b) {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}
console.log(storedPrices);
console.log(storedPrices.reverse());
/////////////////////////////////////////////////////////////////////////////////////////////
//  Filtering Arrays with filter()
///////////////////////////////////////

const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
});
console.log(filteredArray);
////////////////////////////////////////////////////////////////////////////
//   Where Arrow Functions Shine!
////////////////////////////////////
const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray); // new Array has filtered price >6
//////////////////////////////////////////////////////////////////////////////////////
// The Important reduce() Method ??
//////////////////////////////////
// sum = 0;
// prices.forEach((price) => {
//     sum += price;
// })
// console.log(sum);

const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
  return preValue + curValue;
}, 0);
console.log(sum); // Look image reduce
////////////////////////////////////////////////////////////////////////
//  Arrays & Strings - split() and join()
//////////////////////////////////////////////
const data = "new york;100.5;49";
const transformedData = data.split(";"); // ['new york' ,100.5 ,49]
transformedData[1] = +transformedData[1]; //transform to real number
console.log(transformedData);
const nameFragments = ["zizo", "fozy"];
const name = nameFragments.join(); //zizo,fozy
const name = nameFragments.join(" ");
console.log(nameFragments);
//////////////////////////////////////////////////////////////////////////////////
//  The Spread Operator (...)
////////////////////////////////////
const copiedNameFragments = [...nameFragments];
nameFragments.push("MR");
console.log(nameFragments, copiedNameFragments);
console.log(Math.min(...prices));

const persons = [
  { name: "Mr", age: 30 },
  { name: "zizo", age: 31 }
];
const copiedPersons = [...persons]; // copy address place of memory
console.log(persons, copiedPersons);
const copiedPersons = [
  ...persons.map(person => ({
    name: person.name,
    age: age,
    hobbies: [...person.hobbies]
  }))
];

persons.push({ name: "Anna", age: 29 });
persons[0].age = 31; //reflect for 2 array
console.log(persons, copiedPersons);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Understanding Array Destructuring
////////////////////////////////////////

const nameData = ["Max", "Abdelaziz", "Mr", 30];
const fname = nameData[0];
const lname = nameData[1];

const [firstName, LastName, ...otherInformation] = nameData;
console.log(firstName, LastName ,otherInformation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Maps & Sets - Overview
///////////////////////////

// Look Image Maps&sets
// GO TO setmaps.js
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





