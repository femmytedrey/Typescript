import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};
export const ListItem = <T extends ReactNode>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

