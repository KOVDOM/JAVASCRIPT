/*
* Programozási paradigmák
*/

// Procedurális
// C, PHP, JavaScript

var product = {
  name: 'Fűnyíró',
  price: 75000,
  isInStock: true,
};

product.price *= 0.9;

var message = `A termék neve: ${product.name}, ára: ${product.price} és 
${product.isInStock ? 'van készleten' : 'nincs készleten'}`;

console.log(message);

/*
* Funkcionális
*/
// Lisp, Haskell, Clojure, F#, (JavaScript)

// pure function
// side effect nélkül
// _ -> _

// pipeline-ok


// (Product, number) -> Product
function withDiscount(product, discount) {
  return {
    name: product.name, 
    price: product.price * discount, 
    isInStock: product.isInStock, 
  }
}

// (Product) -> string
function toMessage(product) {
  return `A termék neve: ${product.name}, ára: ${product.price} és 
  ${product.isInStock ? 'van készleten' : 'nincs készleten'}`;
}

// immutable value
var product2 = {
  name: 'Fűnyíró',
  price: 75000,
  isInStock: true,
};

console.log(toMessage(withDiscount(product2, 0.9)));


/*
* Objektum orientált
*/

// Java, C#, PHP, JavaScript


