import "./App.css";
import Color from "./compenents/Color";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  const [hexvalue, setHexvalue] = useState("");
  return (
    <div className="App">
      <Color
        color={color}
        setColor={setColor}
        hexvalue={hexvalue}
        setHexvalue={setHexvalue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
};

export default App;
