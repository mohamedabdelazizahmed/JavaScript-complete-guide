//  Working with Sets
// set tools to manage some uniqe values
//////////////////////////////////////////
const ids = new Set();
const ids = new Set([1, 2, 3]);
console.log(ids);
ids.add(2); // Not Added becouse value must be uniqe
if (ids.has('hi')) {
    ids.delete('hi');
}
console.log(ids.has(1)); //true

for (const entry of ids.entries()) {
    console.log(entry);//    [1,1] [2,2] [3,3]
}
const names = new Set(["Hi", "from", "sets"]);
// you can use values()insted of enteries() the value
for (const entry of names.entries()) {
    console.log(entry);//    [hi,hi] [from,from] [sets,sets]
}

///////////////////////////////////////////////////////////////////////
//  Working with Maps
///////////////////////////////

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };
const personData = new Map([[person1, [{ data: 'yerstday', price: 30 }]]]);
personData.set(person2, [{ data: 'HWLLOO', price: 30 }]);
console.log(personData);
console.log(personData.get(person1));
for (const entry of personData.entries()) {
    console.log(entry); //[{key} ,[values]]
}

for (const [key ,value] of personData.entries()) {
    console.log(key ,value);
}

for (const key of personData.keys()) {
    console.log(key);
}
for (const value of personData.values()) {
    console.log(value);
}
//////////////////////////////////////////////////////////////////////
//  Understanding WeakSet
// Allow the garbage collection no code uses in set
//////////////////////////
let person = {name:'Max'};
const persons = new WeakSet();
persons.add(person);
person = null;
console.log(persons);