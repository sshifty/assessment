import styles from "./App.module.css";
import numberToWord from "./numberToWord";
import { useState } from "react";

const MAX_NUMBER = 999999999999999;

function App() {
  const [number, setNumber] = useState("");

  const forbiddenKeys = ["+", "-", ",", ".", "e", "E"];

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const blockKeyDown = (e) => {
    const isCurrentNumberBigger = Number(number + e.key) > MAX_NUMBER;
    const isKeyCodeBackSpace = e.keyCode === 46;
    const isForbidden=forbiddenKeys.includes(e.key);
    if (
      (isCurrentNumberBigger && !isKeyCodeBackSpace) ||
      isForbidden
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.app}>
      <header>
        <h1>numbers to words</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.calculate}>
          <input
            value={number}
            type="number"
            onChange={handleChange}
            onKeyDown={blockKeyDown}
            placeholder="Enter your number here!"
          />
          <div className={styles.display}>
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
