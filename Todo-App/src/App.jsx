import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Heading from "./Components/Heading";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";

const App = () => {
  const intialTodoContents = [];
  const [todoContents, setTodoContents] = useState(intialTodoContents);

  const handleAddTodo = (todoName, todoDate) => {
    const newTodoArr = [...todoContents, { name: todoName, date: todoDate }];
    setTodoContents(newTodoArr);
  };

  const handleDeleteBtn = (name) => {
    const newTodoArr = todoContents.filter((item) => item.name !== name);
    setTodoContents(newTodoArr);
  };
  return (
    <div className="flex flex-col">
      <Heading />
      <AddTodo onAddTodo={handleAddTodo} />
      {todoContents.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <TodoItems
          todoContents={todoContents}
          onDeleteClick={handleDeleteBtn}
        />
      )}
    </div>
  );
};

export default App;
