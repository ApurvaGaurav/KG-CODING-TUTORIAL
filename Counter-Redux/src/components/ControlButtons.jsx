import { useRef } from "react";
import { useDispatch } from "react-redux";

function ControlButtons() {
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const inputElement = useRef();

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="inputBox">
        <input type="text" placeholder="Enter Number" ref={inputElement} />
      </div>
      <div className="btnBox">
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        <button>Privacy Toggle</button>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
    </div>
  );
}

export default ControlButtons;
