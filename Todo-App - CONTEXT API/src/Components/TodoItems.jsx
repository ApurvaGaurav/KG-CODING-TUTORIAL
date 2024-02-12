import { MdDelete } from "react-icons/md";
import TodoItemsContext from "../../store/todo-items-store";
import { useContext } from "react";

const TodoItems = () => {
  const { todoContents, deleteItem } = useContext(TodoItemsContext);
  // console.log(todoItemsContext);

  return (
    <div className="">
      {todoContents.map((content) => (
        <div
          key={content.name}
          className="flex mx-auto items-center w-[37%] justify-between my-4"
        >
          <p className="font-semibold text-xl w-1/3">{content.name}</p>
          <p className="font-semibold text-xl ">{content.date}</p>

          <button
            className="bg-red-500 py-2 px-3 font-semibold text-lg rounded-lg"
            onClick={() => {
              deleteItem(content.name);
            }}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoItems;
