import { useState } from "react";
import { Greeter } from "./components/Greeter";
import { ShoppingList } from "./components/ShoppingList";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { Item } from "./models/item";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([
      ...items,
      { id: Math.ceil(Math.random() * 10000), product, quantity },
    ]);
  };

  // const items = [
  //   { id: 1, product: "Lemon", quantity: 3 },
  //   { id: 2, product: "Chicken Breast", quantity: 2 },
  // ];

  return (
    <>
      <Greeter person="Dipesh" />
      <Greeter person="Raatey" />
      <Greeter person="Mitthu" />
      <ShoppingListForm onAddItem={addItem} />
      <div>{<ShoppingList items={items} />}</div>
    </>
  );
}

export default App;
