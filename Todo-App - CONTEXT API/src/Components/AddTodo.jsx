/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import TodoItemsContext from "../../store/todo-items-store";

const AddTodo = () => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";

    addNewItem(todoName, todoDate);
  };

  return (
    <form
      className="flex mx-auto my-4 w-1/2 gap-10 justify-center"
      onSubmit={handleOnSubmit}
    >
      <input
        type="text"
        placeholder="Enter Todo Here"
        className="border-2 border-gray-600 p-2 w-1/3 rounded-sm"
        ref={todoNameElement}
      />
      <input
        type="date"
        className="border-2 border-gray-600  p-2 rounded-sm"
        ref={todoDateElement}
      />
      <button className="bg-green-500 py-2 px-4 font-semibold text-lg rounded-lg">
        <FaPlus />
      </button>
    </form>
  );
};
export default AddTodo;
