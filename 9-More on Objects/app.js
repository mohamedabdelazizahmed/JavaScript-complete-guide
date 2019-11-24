//What are Object
// Look Pic what are object 
///////////////////////////////////////////////////////////////
//  Objects & Primitive Values Objects - Recap Adding, Modifying
///////////////////////////////////////////////////////////////

//

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    }
};
person.greet();
///////////////////////////////////////////////////////////////
//  Adding, Modifying & Deleting Properties
///////////////////////////////////////////
let person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },
};
person.isAdmin = true; //add property inobject in  the fly
console.log(person.isAdmin);
person.age = null; //   reset value in property age
console.log(person.age); //undefined
delete person.age; // delete property age from person object
person.age = undefined; // also delete propery age from person
console.log(person.age); //undefined

console.log(person.age); //undefined
console.log(person);
/////////////////////////////////////////////////////////////////////
//  Special Key Names & Square Bracket Property Access
///////////////////////////////////////////////////////
let person = {
    'first name': 'Max', // set propery in single quotes to make sapce
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },

};
// to access the property in single qoutes
console.log(person['first name']); // use annotaion as array becouse array is object

const movieList = document.getElementById('movie-list');
movieList.style.backgroundColor = 'red';
movieList.style[backgroundColor] = 'red';
movieList.style['background-color'] = 'red';
/////////////////////////////////////////////////////////////////////////
//  Property Types & Property Order
/////////////////////////////////////

let person = {
    'first name': 'Max', // set propery in single quotes to make sapce
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },
    1.5: 'hello'
};
console.log(person[1.5]);//hello
console.log(person['1.5']); //hello
//Property Order
console.log(person);
let numbers = { 1: 'hi', 2: 'welcome', 8: 'superman' };
// That makes senes -think about arrays.Arrays are objects
//with number keys
console.log(numbers);
/////////////////////////////////////////////////////////////////////////////
//  Dynamic Property Access & Setting Properties Dynamically
/////////////////////////////////////////////////////////////
let person = {
    'first name': 'Max', // set propery in single quotes to make sapce
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },
    1.5: 'hello'
};

const keyName = 'first name';
console.log(person[keyName]); //    Max


const userChosenKeyName = 'level';
let person = {
    'first name': 'Max', // set propery in single quotes to make sapce
    age: 30,
    userChosenKeyName: '....', //defiend the property in object Not set value varible in obj
    [userChosenKeyName]: 'set praktes to set varible is level',
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },
    1.5: 'hello'
}

console.log(person);
///////////////////////////////////////////////////////////////////
//  Demo App & Shorthand Property Syntax
////////////////////////////////////////

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById('search-btn');


const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list'); //ul
    if (movies.length === 0) {
        movieList.classList.remove('visiable');
    } else {
        movieList.classList.add('visiable');
    }
    movieList.innerHTML = '';
    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.inf0.title.includes(filter));


    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        //       movieEl.textContent = movies.info.title + ' - ' + movies.info[extraName];
        let text = movie.info.title + ' - ';
        //  show dynamic property 
        for (const key in movie.info) {
            if (key !== 'title') {
                text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    })

}

/**
 * ADD Movie
 */
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const exteraValue = document.getElementById("extra-value").value;

    console.log(title, exteraValue, extraName);

    if (title.trim() === '' ||
        extraName.trim() == '' ||
        exteraValue.trim() == '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: exteraValue // dynamic property using square bracket
        },
        id: Math.random().toString()
    }
    console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);
    renderMovies();

}
/**
 * SEARCH MOVIE
 */
const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
//////////////////////////////////////////////////////////////

// The Object Spread Operator (...)
/////////////////////////////////////////////////

let person = {
    'fname': 'Max', // set propery in single quotes to make sapce
    hobbies: ['Sports', 'Coding'],
};

const anotherPerson = person;
person.age = 30;
console.log(person);
console.log(anotherPerson);
const person2 = { ...person };
console.log(person2);
person.age = 31;
console.log(person2);
person.hobbies.push('cooking'); // added cooking  in hobbies
console.log(person); // referance value array == 
console.log(person2); // referance value array == 

const person3 = { ...person, age: 29, hobbies: [...person.hobbies] }; // pull all property  in person  and override  age
console.log(person);
console.log(person3);

console.log(person.hobbies.pop());


























