////////////////////////////////////////////////
//  Objects - Recap
////////////////////////////////////////////////

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    }
};
person.greet();

///////////////////////////////////////////////////////////////////////////////////////////////
//  Adding, Modifying & Deleting Properties
/////////////////////////////////////////////
// overwrite Property
person.age = 31;
// add Property
person.isAdmin = true;
//Delete Property
delete person.name;       //// delete property age from person object
person.name = undefined;  //// also delete property age from person
person.hobbies = null;    ///reset value in property age
console.log(person);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Special Key Names & Square Bracket Property Access
///////////////////////////////////////////////////////

// to make Special Key Names set single quotes
const person = {
    'first name': 'Maximilian',
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    }
};
// to access the special key  using Square Bracket 
console.log(person['first name']); // Array just general object in js
//example
const movieList = document.getElementById('movie-lis');
movieList.style.backgroundColor = 'red'; // ==
movieList.style['background-color'] = 'red';
/////////////////////////////////////////////////////////////////////////////////////////////////////
//  Property Types & Property Order
///////////////////////////////////

const person = {
    'first name': 'Maximilian',
    'last name': 'zizooo',
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },
    1.5: 'hello'
};
const keyName = 'last name';
console.log(person[keyName]);  // access key name as string 
console.log(person[1.5]);      // access key as number
console.log(person);
// if object key number only  will sorted asc
const numbers = { 1: 'hi', 5: 'hello' };
console.log(numbers); // only numbers keys
//////////////////////////////////////////////////////////////////////////////////////////////////////
//  Dynamic Property Access & Setting Properties Dynamically
////////////////////////////////////////////////////////////

const userChosenKeyName = 'level';
let person = {
    'first name': 'Max', // set property in single quotes to make space
    age: 30,
    userChosenKeyNameNoVariable: '....', //defined the property in object Not set value variable in obj
    [userChosenKeyName]: 'set square brackets to set variable is refer level',
    hobbies: ['Sports', 'Coding'],
    greet: function () {
        alert("Hi Max");
    },
    1.5: 'hello'
}
console.log(person[userChosenKeyName]);
console.log(person); // show level:value

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Demo App & Shorthand Property Syntax - PART 1
//  Rendering Elements based on Objects
//////////////////////////////////////////////////
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById('search-btn');
// to save movies in array 
const movies = [];
/**
 * to show the list of movie 
 * Rendering Elements based on Objects
 * @version 1
 */
const renderMovies = () => {
    const movieList = document.getElementById('movie-list'); //ul
    if (movies.length === 0) {
        // remove class visible in movie-lis ul 
        movieList.classList.remove('visible'); // visible display block in css 
    } else {
        // Data is exists
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    // show movie in ul movie -list 
    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    });

}
/**
 *  to add new movie 
 */
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;
    console.log(title, extraValue, extraName);
    if (title.trim() === '' ||
        extraName.trim() == '' ||
        extraValue.trim() == '') {
        // nothing 
        return;
    }
    const newMovie = {
        // info is nested object 
        info: { 
            // dynamic property value only if property name has equal name of value write short BETTER THAN title:title 
            title,
            // dynamic property name and value using square bracket 
            [extraName]: extraValue
        },
        id: Math.random().toString()
    }
    console.log(newMovie);
    // store in movies array 
    movies.push(newMovie);
    console.log(movies);
    //call renderMovies to display new movie added ...
    renderMovies();
};
// to run addMovieHandler when click add Movie
addMovieBtn.addEventListener('click', addMovieHandler);
//searchBtn.addEventListener('click', searchMovieHandler);
////////////////////////////////////////////////////////////////////////////////////////////////////////
//  for-in Loops & Outputting Dynamic Properties - PART 2 - APP DEMO
////////////////////////////////////////////////////////////////////
/**
 * @method renderMovies 
 * @version 2
 *  to show the list of movie 
 *  Rendering Elements based on Objects
 *  Outputting Dynamic Properties
 */
const renderMovies = () => {
    const movieList = document.getElementById('movie-list'); //ul
    if (movies.length === 0) {
        // remove class visible in movie-lis ul 
        movieList.classList.remove('visible'); // visible display block in css 
    } else {
        // Data is exists
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    // show movie in ul movie -list 
    movies.forEach((movie) => {
        const movieEl = document.createElement('li');
        //  movieEl.textContent = movie.info.title - movie.info[extraName];
        let text = movie.info.title + ' - ';
        //  show dynamic property and print dynamic key  using for-in
        for (const key in movie.info) {
            //  comparison key must as string 
            if (key !== 'title') {
                text = text + `${key} : ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });

}
//////////////////////////////////////////////////////////////////////////////////////////////////
//  Adding the Filter Functionality - PART 3 - APP DEMO
////////////////////////////////////////////////////////

/**
 * SEARCH MOVIE ADDED AFTER addMovieHandler()
 * 
 */
const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}
// ADDED AFTER ADD MOVIE BTN
searchBtn.addEventListener('click', searchMovieHandler);

/**
 * @method renderMovies 
 * @version 3
 *  to show the list of movie 
 *  Rendering Elements based on Objects
 *  Outputting Dynamic Properties
 *  Adding the Filter Functionality
 */

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list'); //ul
    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    // PART FILTER THE MOVIES 
    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.info.title.includes(filter));


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// final PART 1 + PART 2 + PART 3
/////////////////////////////////

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


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
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
    const extraValue = document.getElementById("extra-value").value;

    console.log(title, extraValue, extraName);

    if (title.trim() === '' ||
        extraName.trim() == '' ||
        extraValue.trim() == '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Understanding "Chaining" (Property & Method Chaining)
///////////////////////////////////////////////////////////////
// LIKE   movie.info.title AS PROPERTY 
// LIKE   Math.random().toString() AS FUNCTION
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  The Object Spread Operator (...)  - COPY keys in new object 
/////////////////////////////////////////////

let person = {
    'fname': 'Max', // set property in single quotes to make space
    hobbies: ['Sports', 'Coding'],
};
// copy object ?
const anotherPerson = person;
person.age = 30;
console.log(person);
console.log(anotherPerson);// as same person in memory because it's reference 
const person2 = { ...person }; // it's key values in person and merge it  in obj person2
console.log(person2); // it's new objected copy 
person.age = 31;
console.log(person2); // still age =30
person.hobbies.push('cooking'); // added cooking  in hobbies in person 
console.log(person); // reference value array 
// reference value array === reference value array in object person NOT COPIED :( 
console.log(person2);
// pull all property  in person  and overwrite property age and new array in hobbies array reference value
const person3 = { ...person, age: 29, hobbies: [...person.hobbies] };
console.log(person);
console.log(person3);

console.log(person.hobbies.pop());
console.log(person);
console.log(person3);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Understanding Object.assign() - COPY keys in new object 
//////////////////////////////////////////////////////////

const person = { name: 'Max' };
const person2 = Object.assign({}, person); // merge key values in person object in new  object 
console.log(person2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Object Destructuring
//////////////////////////////
/**
 * @method renderMovies 
 * @version 4
 *  to show the list of movie 
 *  Rendering Elements based on Objects
 *  Outputting Dynamic Properties
 *  Adding the Filter Functionality
 *  Object Destructuring
 */

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list'); //ul
    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.inf0.title.includes(filter));


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps } = movie;
        console.log(info);
        console.log(otherProps);
        const { title: movieTitle } = info; // to change name title variable pull out  assign new name in extracted variable
        let text = movieTitle + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key} : ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Checking for Property Existence
///////////////////////////////////////

/**
 * @method renderMovies 
 * @version 5
 *  to show the list of movie 
 *  Rendering Elements based on Objects
 *  Outputting Dynamic Properties
 *  Adding the Filter Functionality
 *  Object Destructuring
 *  Checking for Property Existence
 */

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


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');

        // checking property in movie  METHOD 1 & 2
        // if (!('info' in movie)) {}
        // if (!(movie.info === undefined)) {}

        const { info, ...otherProps } = movie;
        console.log(info);
        console.log(otherProps);
        const { title: movieTitle } = info; // to change name title varible pull out  assign new name in extracted varb
        let text = movieTitle + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key} : ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });

};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Introducing "this"
/////////////////////////////
/**
 * @method renderMovies 
 * @version 6
 *  to show the list of movie 
 *  Rendering Elements based on Objects
 *  Outputting Dynamic Properties
 *  Adding the Filter Functionality
 *  Object Destructuring
 *  Checking for Property Existence
 *  Introducing "this"
 */

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


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');

        // checking property in movie  METHOD 1 & 2
        // if (!('info' in movie)) {}
        // if (!(movie.info === undefined)) {}

        const { info, ...otherProps } = movie;
        console.log(info);
        console.log(otherProps);
        //const { title: movieTitle } = info; // to change name title varible pull out  assign new name in extracted varb
        // let text = movieTitle.toUpperCase() + ' - ';
        let text = movie.getFormattedTitle() + ' - ';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key} : ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });

};

/**
 * Introducing "this"
 * @version 2
 */
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    console.log(title, extraValue, extraName);

    if (title.trim() === '' ||
        extraName.trim() == '' ||
        exteraValue.trim() == '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle: function () {
            return this.info.title.toUpperCase();
        }
    }
    console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);
    renderMovies();

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The Method Shorthand Syntax
//////////////////////////////
/**
 * Introducing "this"
 * The Method Shorthand Syntax
 * @version 3
 */
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    console.log(title, extraValue, extraName);

    if (title.trim() === '' ||
        extraName.trim() == '' ||
        exteraValue.trim() == '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        }
    }
    console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);
    renderMovies();

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  The "this" Keyword And Its Strange Behavior
///////////////////////////////////////////////

/**
 * Introducing "this"
 * The Method Shorthand Syntax
 * The "this" Keyword And Its Strange Behavior
 * @version 4
 */
const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const exteraValue = document.getElementById("extra-value").value;

    console.log(title, extraValue, extraName);

    if (title.trim() === '' ||
        extraName.trim() == '' ||
        extraValue.trim() == '') {
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            //  it's refer the window object Not The movie object when call 
            // let {getFormattedTitle} = movie;   
            // getFormattedTitle = getFormattedTitle.bind(movie) // movie refer the this
            // let text = getFormattedTitle() + ' - ';

            console.log(this);
            return this.info.title.toUpperCase();
        }
    }
    console.log(newMovie);
    movies.push(newMovie);
    console.log(movies);
    renderMovies();

}
/////////////////////////////////////////////////////////////////////////////////////////////////////
//  call() and apply()
///////////////////////////////////
/**
 * @method renderMovies 
 * @version 7
 *  to show the list of movie 
 *  Rendering Elements based on Objects
 *  Outputting Dynamic Properties
 *  Adding the Filter Functionality
 *  Object Destructuring
 *  Checking for Property Existence
 *  Introducing "this"
 *   The "this" Keyword And Its Strange Behavior
 *  call() and apply()
 */

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


    filteredMovies.forEach((movie) => {
        const movieEl = document.createElement('li');

        // checking property in movie  METHOD 1 & 2
        // if (!('info' in movie)) {}
        // if (!(movie.info === undefined)) {}

        const { info, ...otherProps } = movie;
        console.log(info);
        console.log(otherProps);
        //const { title: movieTitle } = info; // to change name title varible pull out  assign new name in extracted varb
        // let text = movieTitle.toUpperCase() + ' - ';

        //  it's refer the window object Not The movie object when call 
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie) // movie refer the this
        // let text = getFormattedTitle.call(movie) + ' - '; // addtional argument using sperated ,,,,
        // let text = getFormattedTitle.apply(movie,[,,,,]) + ' - '; // addtional argument using sperated [,,,,]

        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key} : ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });

};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  What the Browser (Sometimes) Does to "this"
//////////////////////////////////////////////////

/**
 * SEARCH MOVIE
 */
const searchMovieHandler = () => {
    console.log(this); //  this =>refer  to window obj

    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}
/**
 * SEARCH MOVIE
 */
const searchMovieHandler = function () {
    console.log(this); //  this =>refer  to search btn 

    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const members = {
    teamName: 'Blue Rockets',
    people: ['Max', 'Manuel'],
    getTeamMembers() {
        this.people.forEach(p => {
            console.log(this);
            console.log(p + ' - ' + this.teamName);
        })
    }
}
members.getTeamMembers();
const members = {
    teamName: 'Blue Rockets',
    people: ['Max', 'Manuel'],
    getTeamMembers() {
        this.people.forEach(function (p) {
            console.log(this);
            console.log(p + ' - ' + this.teamName); // Max -undefined
        })
    }
}
members.getTeamMembers();
/////////////////////////////////////////////////////////////////////////////////////////////////
//  Getters & Setters
/////////////////////////////





















