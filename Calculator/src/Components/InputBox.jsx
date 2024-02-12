const InputBox = ({ calVal }) => {
  return (
    <div className="input-box w-full flex justify-center h-10 my-4">
      <input
        type="text"
        className="border-2 border-gray-400 w-5/6 p-2 text-center "
        value={calVal}
        readOnly
        placeholder="Enter values"
      />
    </div>
  );
};
export default InputBox;
