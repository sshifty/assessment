import AppCSS from "./App.module.css";
import numberToWord from "./numberToWord";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(null);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setNumber(Number(Number(e.target.value).toString()));
    } else {
      setNumber(null);
    }
  };
  const blockKeyDown = (e) => {
    if (
      (Number(number + e.key) > 999999999999999 &&
        e.keyCode !== 46 &&
        e.keyCode !== 8) ||
      e.keyCode === 190 ||
      e.keyCode === 69 ||
      e.keyCode === 109 ||
      e.keyCode === 107 ||
      e.keyCode === 110 ||
      e.keyCode === 188
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className={AppCSS.App}>
      <header>
        <h1>numbers to words</h1>
      </header>
      <div className={AppCSS.container}>
        <div className={AppCSS.calculate}>
          <input
            value={number}
            type="number"
            onChange={handleChange}
            onKeyDown={blockKeyDown}
            placeholder="Enter your number here!"
          />
          <div className={AppCSS.display}>
            {numberToWord(number)
              ? numberToWord(number)
              : "And words will appear here!"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
