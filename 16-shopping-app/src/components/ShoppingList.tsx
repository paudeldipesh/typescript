import { Item } from "../models/item";

interface ShoppingListProps {
  items: Item[];
}

export const ShoppingList = ({ items }: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item: Item) => (
          <li key={item.id}>
            <i>{item.product}</i> = <b>{item.quantity}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
