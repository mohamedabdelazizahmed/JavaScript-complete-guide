//  
const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");
const dbRequest = indexedDB.open('StorageDummy' ,1);
dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result;
    const objStore = db.createObjectStore('products',{keyPath:'id'});
    objStore.transaction.oncomplete = function (event) {
        const productsStore = db.transaction('products' , 'readwrite').objStore('products');
        productsStore.add({
                id:'p1' ,
                title:'First Product' ,
                price:12.99 ,
                tags:['ex' ,'ar']
            });
    }
}
dbRequest.onerror = function () {
    console.log('ERROR !');
}
// index db
const userId = "u123";
// complex data 
const user  = {
    name:'Max' , 
    age:39,
    hobbies:['Sports' ,'Cooking']
};
storeBtn.addEventListener("click", () => {
    
    db.transaction('products' , 'readwrite').objStore('products');
    productsStore.add({
            id:'p1' ,
            title:'First Product' ,
            price:12.99 ,
            tags:['ex' ,'ar']
        });
    
});
retrieveBtn.addEventListener("click", () => {

});

