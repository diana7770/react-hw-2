import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Button from "./components/Button";

import "./App.css";

function App() {
  const onClickBtn = () => {
    console.log("Тицьнув(-ла)!");
  };
  return (
    <div>
      <Greeting name="Тетяна" />
      <Message text="Тут могла б бути ваша реклама" />
      <Button onClick={onClickBtn} />
    </div>
  );
}

export default App;
