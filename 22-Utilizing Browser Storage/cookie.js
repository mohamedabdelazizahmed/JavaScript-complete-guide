//  cookie
// When not set max-age OR expires for cookie the cookie expired like sessionStorage 
//////////////////////
console.log(document.cookie );
const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");
storeBtn.addEventListener("click", () => {
    const userId = 'u123';
    // complex data 
    const user  = {
        name:'Max' , 
        age:39,
        hobbies:['Sports' ,'Cooking']
    };
    document.cookie  =  `uid=${userId}; max-age=2`; //set expire 2sc
    document.cookie  =  `uid=${userId}; expires=`; //set expires date

    document.cookie  =  `user=${JSON.stringify(user)}`;
});
retrieveBtn.addEventListener("click", () => {
// npm install serve 
    console.log(document.cookie);
    console.log(document.cookie.split(';'));
    const cookieData =  document.cookie.split(';');
    console.log("cookieData"); 
    console.log(cookieData);
    const data  = cookieData.map(i=>{
        return i.trim();
    });
    
    console.log("data " , data);
    console.log("data 1 " , data[1].split('=')[1]);

});
