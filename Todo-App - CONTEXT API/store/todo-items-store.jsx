import { createContext } from "react";

const TodoItemsContext = createContext([
  {
    todoContents: [],
    addNewItem: () => {},
    deleteItem: () => {},
  },
]);
export default TodoItemsContext;
