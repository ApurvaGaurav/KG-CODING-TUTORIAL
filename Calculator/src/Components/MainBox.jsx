import { useState } from "react";
import ButtonContainer from "./ButtonsContainer";
import InputBox from "./InputBox";

const MainBox = () => {
  const [calVal, setCalVal] = useState("");

  const handleBtnClick = (btn) => {
    if (btn === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (btn === "C") {
      setCalVal("");
    } else {
      const newVal = calVal + btn;
      setCalVal(newVal);
    }

    // console.log(btns);
  };
  return (
    <div className="mainBox mt-5 p-2 mx-auto border-2 border-gray-300 w-1/4 flex items-center flex-col">
      <InputBox calVal={calVal} />
      <ButtonContainer handleBtnClick={handleBtnClick} />
    </div>
  );
};
export default MainBox;
