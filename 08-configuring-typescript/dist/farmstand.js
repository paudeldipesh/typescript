"use strict";
const firstProduct = {
    name: "orange",
    price: 4,
    quantity: 7,
};
const printProductSummary = (product) => {
    console.log(`${product.name} - $${product.price}`);
};
printProductSummary(firstProduct);
