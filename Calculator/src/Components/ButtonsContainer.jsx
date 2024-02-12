const ButtonContainer = ({ handleBtnClick }) => {
  const ButtonNames = [
    "C",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="btnsContainer gap-2 justify-center flex flex-wrap w-2/3">
      {ButtonNames.map((btns) => (
        <button
          className="bg-gray-200 p-2 rounded-sm border-2 border-gray-700 w-14 hover:bg-gray-300 active:bg-black active:text-white"
          key={btns}
          onClick={() => handleBtnClick(btns)}
        >
          {btns}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
