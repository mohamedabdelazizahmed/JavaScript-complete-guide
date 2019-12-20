//  Getting Started with Http  
/////////////////////////////////////////////////
// Use jsonplaceholder.com
///////////////////////////////////////////////////
//  Sending a GET Request
///////////////////////////////////
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
///////////////////////////////////////////////////////////////////
//  JSON Data & Parsing Data
////////////////////////////
const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.responseType = 'json'; // you can ignore JSON.parse()
xhr.onload = function () {
    console.log(xhr.response); // json data WITHOUT javascript 
    //  const listOfPosts = JSON.parse(xhr.response); // Converts a JavaScript Object Notation (JSON) string into an object. 
    const listOfPosts = xhr.response;
    console.log(listOfPosts);
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);

    }

}
xhr.send();
/////////////////////////////////////////////////////////////////////////////////////
//  Promisifying Http Requests (with XMLHttpRequest)
//////////////////////////////////////////////////////

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')


function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.responseType = 'json'; // you can ignore JSON.parse()
        xhr.onload = function () {
            console.log(xhr.response); // json data WITHOUT javascript 
            resolve(xhr.response);
            //  const listOfPosts = JSON.parse(xhr.response); // Converts a JavaScript Object Notation (JSON) string into an object. 


        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

// function fetchPosts() {
//     sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
//         .then(responseData => {
//             const listOfPosts = responseData;
//             console.log(listOfPosts);
//             for (const post of listOfPosts) {
//                 const postEl = document.importNode(postTemplate.content, true);
//                 postEl.querySelector('h2').textContent = post.title.toUpperCase();
//                 postEl.querySelector('p').textContent = post.body;
//                 listElement.append(postEl);
//             }
//         });
// }

async function fetchPosts() {
    const responseData = await sendHttpRequest(
        'GET',
        'https://jsonplaceholder.typicode.com/posts'
    )

    const listOfPosts = responseData;
    console.log(listOfPosts);
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }
}
fetchPosts();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Sending Data with a POST Request
//////////////////////////////////////

async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    // APPEND DATA IN ABOVE
    sendHttpRequest(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        post
    )
};
createPost('DUMMY', 'DUMMY POST WITH HTTPREQUEST');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Triggering Requests via the UI 
//////////////////////////////////////
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector('#available-posts button');

fetchButton.addEventListener('click', fetchPosts);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Sending a DELETE Request
///////////////////////////////////
async function fetchPosts() {
    const responseData = await sendHttpRequest(
        'GET',
        'https://jsonplaceholder.typicode.com/posts'
    )

    const listOfPosts = responseData;
    console.log(listOfPosts);
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        // add postId  to delete this cart
        postEl.querySelector('li').id = post.id;
        listElement.append(postEl);
    }
}
const postList = document.querySelector('ul');
postList.addEventListener('click', event => {

    if (event.target.tagName === 'BUTTON') {
        console.log('Clicked on Button');
        const postId = event.target.closest('li').id;
        console.log(postId);
        sendHttpRequest(
            'DELETE',
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handling Errors
////////////////////////////
/**
 * Handling error
 * @override {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function sendHttpRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // append header 
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.open(method, url);
        xhr.responseType = 'json'; // you can ignore JSON.parse()
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response); // json data WITHOUT javascript 
                resolve(xhr.response);
                //  const listOfPosts = JSON.parse(xhr.response); // Converts a JavaScript Object Notation (JSON) string into an object.          
            } else {
                reject(new Error('Somethig went wrong  :('))
            }

        };
        // handling error
        xhr.onerror = function () {
            console.log(xhr.response);
            console.log(xhr.status);
            reject(new Error('Failed to send request '))
        }
        xhr.send(JSON.stringify(data));
    });
    return promise;
}

async function fetchPosts() {
    try {
        const responseData = await sendHttpRequest(
            'GET',
            'https://jsonplaceholder.typicode.com/posts'
        )

        const listOfPosts = responseData;
        console.log(listOfPosts);
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            // add postId  to delete this cart
            postEl.querySelector('li').id = post.id;
            listElement.append(postEl);
        }
    } catch (error) {
        alert(error.message);
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Using the fetch() API
//////////////////////////////
/**
 * fetch() API
 * @override {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function sendHttpRequest(method, url, data) {
    // send get request
    return fetch(url)
        .then(response => {
            // response.blob();
            // to transfer to json to javascript object 
            return response.json();
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  POSTing Data with the fetch() API
///////////////////////////////////////

/**
 * fetch() API
 * @override {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function sendHttpRequest(method, url, data) {
    // send get request
    return fetch(url, {
        method: method,
        body: JSON.stringify(data)
    })
        .then(response => {
            // response.blob();
            // to transfer to json to javascript object 
            return response.json();
        });
}
async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    // APPEND DATA IN ABOVE
    sendHttpRequest(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        post
    )
};
createPost('DUMMY', 'DUMMY POST WITH HTTPREQUEST');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Adding Request Headers
////////////////////////////////
/**
 * fetch() API
 * Adding Request Headers
 * @override {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function sendHttpRequest(method, url, data) {
    // send get request
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            // that mean the request carry up json data
            // my request has json data
            'Content-Type': 'application/json',

        }
    })
        .then(response => {
            // response.blob();
            // to transfer to json to javascript object 
            return response.json();
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  fetch() & Error Handling
///////////////////////////////
/**
 * fetch() API
 * Adding Request Headers
 * @override {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function sendHttpRequest(method, url, data) {
    // send get request
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            // that mean the request carry up json data
            // my request has json data
            'Content-Type': 'application/json',

        }
    })

        .then(response => {
            // response.blob();
            // to transfer to json to javascript object 
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return response.json().then(errData => {
                    console.log(errData);
                    throw new Error('Something went wrong! -server-side');
                })
            }
        })
        .catch(error => {
            console.log(error);
            throw new Error('Something went wrong!');
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Working with FormData
////////////////////////////////
/**
 * fetch() API
 * Adding Request Headers
 * @override {*} method 
 * @param {*} url 
 * @param {*} data 
 */
function sendHttpRequest(method, url, data) {
    // send get request
    return fetch(url, {
        method: method,
        // body: JSON.stringify(data),
        // headers: {
        // that mean the request carry up json data
        // my request has json data
        //     'Content-Type': 'application/json',
        // }
        body: data
    })

        .then(response => {
            // response.blob();
            // to transfer to json to javascript object 
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return response.json().then(errData => {
                    console.log(errData);
                    throw new Error('Something went wrong! -server-side');
                })
            }
        })
        .catch(error => {
            console.log(error);
            throw new Error('Something went wrong!');
        });
}
async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };

    const fd = new FormData(form); // you can append value form using name attr in element HTML
    // fd.append('title', title);
    // fd.append('body', content);
    fd.append('userId', userId);
    // append file name 
    // fd.append('someFile' ,,'photo.png');
    // APPEND DATA IN ABOVE
    sendHttpRequest(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        fd
    )
};
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;

    createPost(enteredTitle, enteredContent);
});