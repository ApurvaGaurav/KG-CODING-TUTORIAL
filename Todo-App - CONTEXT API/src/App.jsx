import { useReducer, useState } from "react";
import AddTodo from "./Components/AddTodo";
import Heading from "./Components/Heading";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContext from "../store/todo-items-store";

const todoItemsReducer = (action) => {
  return [];
};

const App = () => {
  const intialTodoContents = [];
  // const [todoContents, setTodoContents] = useState(intialTodoContents);

  const [todoContents, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = { type: "NEW_ITEM", payload: { todoName, todoDate } };
    // const newTodoArr = [...todoContents, { name: todoName, date: todoDate }];
    // setTodoContents(newTodoArr);
  };
  dispatchTodoItems(newItemAction);

  const deleteItem = (name) => {
    const newTodoArr = todoContents.filter((item) => item.name !== name);
    setTodoContents(newTodoArr);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoContents,
        addNewItem,
        deleteItem,
      }}
    >
      <div className="flex flex-col">
        <Heading />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>
  );
};

export default App;

//   useReducer will take 2 things - reducer method and initial value.  and Reducer method takes action object and returns state

// when you click on the button it dispatches an action which calls a reducer function and that function modifies the item

//shubhanallah, tujhme rab dikhta hai, teri ore, tum mile
