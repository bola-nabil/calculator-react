import React, { useState } from "react";
import "./Calculator.css";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const appendValue = (value) => {
    setInput(input + value);
  };
  const calculateResult = () => {
    try {
      const evalResult = evaluate(input);
      setInput(evalResult.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="app center">
      <div className="calculator center">
        <div className="input-field">
          <input
            type="text"
            value={input}
            onChange={(e) => e.target.value}
            className="input-style"
          />
        </div>
        <div className="center-field">
          <div className="center-style"></div>
        </div>
        <div className="buttons">
          <div className="btns-numbers">
            {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "00", "."].map(
              (value) => (
                <button
                  key={value}
                  onClick={() => appendValue(value)}
                  className="numbers"
                >
                  {value}
                </button>
              )
            )}
          </div>
          <div className="btns-operations">
            {["/", "*", "+", "-"].map((value) => (
              <button
                key={value}
                onClick={() => appendValue(value)}
                className="operations"
              >
                {value}
              </button>
            ))}
            <button onClick={calculateResult} className="operations">
              =
            </button>
            <button onClick={clearInput} className="operations">
              C
            </button>
          </div>
        </div>
      </div>
      <footer>Designed by bola-nabil</footer>
    </div>
  );
};

export default Calculator;
