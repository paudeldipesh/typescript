interface Product {
  name: string;
  price: number;
  quantity: number;
}

const firstProduct: Product = {
  name: "orange",
  price: 4,
  quantity: 7,
};

const printProductSummary = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`);
};
printProductSummary(firstProduct);
