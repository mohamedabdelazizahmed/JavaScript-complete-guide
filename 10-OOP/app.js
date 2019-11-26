//  console.log(new Product());
// const productList = {
//     products: [
//       {
//             title: "Book",
//             imageUrl: "Link",
//             price: 1.99,
//             description: "A Short Desc  for Book"
//         }
//         ,
//         {
//             title: "Book2",
//             imageUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fstack-of-books-picture-id157482029%3Fs%3D612x612&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fbook&docid=r3hBcMyl6QTKqM&tbnid=9SeBVL2f7-InDM%3A&vet=10ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg..i&w=612&h=522&bih=722&biw=1536&q=book%20images&ved=0ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg&iact=mrc&uact=8",
//             price: 1.99,
//             description: "A Short Desc  for Book2"
//         },
//     ],
//     render() {
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for (const prod of this.products) {
//             const prodEl = document.createElement('li');
//             prodEl.className = 'product-item';
//             prodEl.innerHTML = `
//                 <div>
//                     <img src="${prod.imageUrl}" alt= "${prod.title}">
//                     <div class="product-item__content">
//                     <h2> ${prod.title}</h2>
//                     <h3> \$ ${prod.price}</h3>
//                     <p>${prod.description}</p>
//                     <button>ADD TO CART</button>
//                     </div>
//                 </div>
//             `;
//             prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }
// };
// productList.render();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Using a First Class Working with Constructor
/////////////////////////////////////////////////////

class Product {
    title = 'DEFAULT';
    imageUrl;
    price;
    description;

    constructor(title, image, price, description) {
        this.title = title;
        this.imageUrl = image;
        this.price = price;
        this.description = description;
    }
}

const productList = {
    products: [
        new Product(
            "Book",
            "Link",
            1.99,
            "A Short Desc  for Book"
        )
        ,
        new Product("Book2",
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fstack-of-books-picture-id157482029%3Fs%3D612x612&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fbook&docid=r3hBcMyl6QTKqM&tbnid=9SeBVL2f7-InDM%3A&vet=10ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg..i&w=612&h=522&bih=722&biw=1536&q=book%20images&ved=0ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg&iact=mrc&uact=8",
            1.99,
            "A Short Desc  for Book2"
        )
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt= "${prod.title}">
                    <div class="product-item__content">
                    <h2> ${prod.title}</h2>
                    <h3> \$ ${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>ADD TO CART</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};
productList.render();
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Fields vs Properties
/////////////////////////////////
// class Product {
//     // the  filed work again with proerties  NOT NEEDED
//     // title = 'DEFAULT';
//     // imageUrl;
//     // price;
//     // description;

//     constructor(title, image, price, description) {
//         this.title = title;
//         this.imageUrl = image;
//         this.price = price;
//         this.description = description;
//     }
// }

// const productList = {
//     products: [
//         new Product(
//             "Book",
//             "Link",
//             1.99,
//             "A Short Desc  for Book"
//         )
//         ,
//         new Product("Book2",
//             "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fstack-of-books-picture-id157482029%3Fs%3D612x612&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fbook&docid=r3hBcMyl6QTKqM&tbnid=9SeBVL2f7-InDM%3A&vet=10ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg..i&w=612&h=522&bih=722&biw=1536&q=book%20images&ved=0ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg&iact=mrc&uact=8",
//             1.99,
//             "A Short Desc  for Book2"
//         )
//     ],
//     render() {
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for (const prod of this.products) {
//             const prodEl = document.createElement('li');
//             prodEl.className = 'product-item';
//             prodEl.innerHTML = `
//                 <div>
//                     <img src="${prod.imageUrl}" alt= "${prod.title}">
//                     <div class="product-item__content">
//                     <h2> ${prod.title}</h2>
//                     <h3> \$ ${prod.price}</h3>
//                     <p>${prod.description}</p>
//                     <button>ADD TO CART</button>
//                     </div>
//                 </div>
//             `;
//             prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }
// };
// productList.render();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Using & "Connecting" Multiple Classes
///////////////////////////////////////////
// class Product {
//     // the  filed work again with proerties  NOT NEEDED
//     // title = 'DEFAULT';
//     // imageUrl;
//     // price;
//     // description;

//     constructor(title, image, price, description) {
//         this.title = title;
//         this.imageUrl = image;
//         this.price = price;
//         this.description = description;
//     }
// }
// class ProductList {
//     products = [
//         new Product(
//             "Book",
//             "Link",
//             1.99,
//             "A Short Desc  for Book"
//         )
//         ,
//         new Product("Book2",
//             "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fstack-of-books-picture-id157482029%3Fs%3D612x612&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fbook&docid=r3hBcMyl6QTKqM&tbnid=9SeBVL2f7-InDM%3A&vet=10ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg..i&w=612&h=522&bih=722&biw=1536&q=book%20images&ved=0ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg&iact=mrc&uact=8",
//             1.99,
//             "A Short Desc  for Book2"
//         )
//     ];
//     constructor() { }
//     render() {
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for (const prod of this.products) {
//             const prodEl = document.createElement('li');
//             prodEl.className = 'product-item';
//             prodEl.innerHTML = `
//                 <div>
//                     <img src="${prod.imageUrl}" alt= "${prod.title}">
//                     <div class="product-item__content">
//                     <h2> ${prod.title}</h2>
//                     <h3> \$ ${prod.price}</h3>
//                     <p>${prod.description}</p>
//                     <button>ADD TO CART</button>
//                     </div>
//                 </div>
//             `;
//             prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }

// }
// const productList = new ProductList();
// productList.render();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  Binding Class Methods & Working with "this"
/////////////////////////////////////////////

// class Product {
//     // the  filed work again with proerties  NOT NEEDED
//     // title = 'DEFAULT';
//     // imageUrl;
//     // price;
//     // description;

//     constructor(title, image, price, description) {
//         this.title = title;
//         this.imageUrl = image;
//         this.price = price;
//         this.description = description;
//     }
// }
// class ProductItem {
//     constructor(product) {
//         this.product = product;
//     }
//     render() {
//         const prodEl = document.createElement('li');
//         prodEl.className = 'product-item';
//         prodEl.innerHTML = `
//                 <div>
//                     <img src="${this.product.imageUrl}" alt= "${this.product.title}">
//                     <div class="product-item__content">
//                     <h2> ${this.product.title}</h2>
//                     <h3> \$ ${this.product.price}</h3>
//                     <p>${this.product.description}</p>
//                     <button>ADD TO CART</button>
//                     </div>
//                 </div>
//             `;
//         return prodEl;
//     }
// }
// class ProductList {
//     products = [
//         new Product(
//             "Book",
//             "Link",
//             1.99,
//             "A Short Desc  for Book"
//         )
//         ,
//         new Product("Book2",
//             "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fphotos%2Fstack-of-books-picture-id157482029%3Fs%3D612x612&imgrefurl=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fbook&docid=r3hBcMyl6QTKqM&tbnid=9SeBVL2f7-InDM%3A&vet=10ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg..i&w=612&h=522&bih=722&biw=1536&q=book%20images&ved=0ahUKEwjAquzq7YjmAhWrxYUKHQGZCh4QMwh6KAIwAg&iact=mrc&uact=8",
//             1.99,
//             "A Short Desc  for Book2"
//         )
//     ];
//     constructor() { }
//     render() {
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for (const prod of this.products) {
//             const productItem = new productItem(prod);
//             prodEl = productItem.render();
//             prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }

// }
// const productList = new ProductList();
// productList.render();