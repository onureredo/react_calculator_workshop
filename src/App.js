import './style.css';
import Calculator from "./components/Calculator";
import Screen from "./components/Screen";
import Keys from "./components/Keys";

function App() {
  return (
    <Calculator>
      <Screen />
      <Keys />
    </Calculator>
  );
}

export default App;
