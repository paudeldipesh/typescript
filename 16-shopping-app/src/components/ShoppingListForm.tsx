import { FormEvent, useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string, quantity: number) => void;
}

export const ShoppingListForm = ({
  onAddItem,
}: ShoppingListFormProps): JSX.Element => {
  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newProduct = productInputRef.current!.value;
    const productQuantity = Number.parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, productQuantity);
    productInputRef.current!.value = "";
    quantityInputRef.current!.value = "1";
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input
        type="number"
        placeholder="Product Quantity"
        min={0}
        ref={quantityInputRef}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
