import { useSelector } from "react-redux";

function DisplayCounter() {
  const counter = useSelector((store) => store.counter);

  return <h2>Current value is : {counter} </h2>;
}

export default DisplayCounter;
