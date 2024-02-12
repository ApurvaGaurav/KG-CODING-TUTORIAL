import TodoItemsContext from "../../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const { todoContents } = useContext(TodoItemsContext);

  return (
    todoContents.length === 0 && (
      <p className="font-bold text-xl text-center my-5">
        ENJOY YOUR DAY! NOTHING TO DO HERE :)
      </p>
    )
  );
};
export default WelcomeMessage;
