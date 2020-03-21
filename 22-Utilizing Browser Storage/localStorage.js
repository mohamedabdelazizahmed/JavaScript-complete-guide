const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// local storage
const userId = "u123";
// complex data 
const user  = {
    name:'Max' , 
    age:39,
    hobbies:['Sports' ,'Cooking']
};
storeBtn.addEventListener("click", () => {
    localStorage.setItem("uid", userId);
   // Go Application Tab and click localStorage & you can added by browser
   // show it in browser [object-object]
    localStorage.setItem('user' , JSON.stringify(user)); //"{}" 
});
retrieveBtn.addEventListener("click", () => {
    const extractedId = localStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the id - ' , extractedId);
    }else{
        console.log('Could not find id.');
    }
});
////////////////////////////////////////////////////////////////////
//  session storage
// Go Application Tab and click sessionStorage & you can added by browser
// copy url and close tab and open new tab  can't show  sessionStorage
// sessionStorage is cleared 
//////////////////////////////////////////////////////////////////////////
storeBtn.addEventListener("click", () => {
    sessionStorage.setItem("uid", userId);
   // Go Application Tab and click localStorage & you can added by browser
   // show it in browser [object-object]
    localStorage.setItem('user' , JSON.stringify(user)); //"{}" 
});
retrieveBtn.addEventListener("click", () => {
    const extractedId = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if (extractedId) {
        console.log('Got the id - ' , extractedId);
    }else{
        console.log('Could not find id.');
    }
});