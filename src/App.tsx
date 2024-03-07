import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<string>("#7fffd4");
  const lettersNumbers: string = "abcdef0123456789";
  const handleClick = (type: string) => {
    if (type == "HEX") {
      let hex: string = "#";
      for (let i = 0; i < 6; i++) {
        hex += lettersNumbers[Math.floor(Math.random() * 16)];
      }
      setColor(hex);
    } else if (type == "RGB") {
      let numbers: string = "";
      let number: number = 0;
      for (let i = 0; i < 3; i++) {
        number = Math.floor(Math.random() * 256);
        numbers += number;
        if (numbers.length < 9) {
          numbers += " ";
        }
      }
      setColor(`rgba(${numbers})`);
    } else if (type == "HSL") {
      let hsl: string = "";
      let number: string = "";
      let count: number = 0;
      for (let i: number = 0; i < 3; i++) {
        number += Math.floor(Math.random() * 100);
        if (count == 0) {
          hsl += number + " ";
          number = "";
        } else if (count == 1) {
          hsl += number + " ";
          number = "";
        } else if (count == 2) {
          hsl += number + "%";
          number = "";
        }
        count++;
      }
      setColor(`hsl(${hsl})`);
    }
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="app__coloroptions">
        <button onClick={() => handleClick("HEX")}>HEX</button>
        <button onClick={() => handleClick("RGB")}>RGBA</button>
        <button onClick={() => handleClick("HSL")}>HSL</button>
      </div>
      <div className="app__colorshow">
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default App;
