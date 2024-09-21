import { useState } from "react";

function App() {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newValue = e.currentTarget.dataset.value;
    if (newValue) {
      setValue((prevValue) => prevValue + newValue);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = eval(value.replace("x", "*"));
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <h2 className="value">{value ? value : '0'}</h2>
          <h1 className="result">{result && `=${result}`}</h1>

          <div className="buttons_wrapper">
            <button
              data-value="C"
              onClick={() => {
                setValue("");
                setResult("");
              }}
            >
              C
            </button>
            <button data-value="%" onClick={handleClick}>
              %
            </button>
            <button data-value="/" onClick={handleClick}>
              /
            </button>
            <button
              data-value="del"
              onClick={() => setValue(value.slice(0, -1))}
            >
              icon
            </button>
            <button data-value="7" onClick={handleClick}>
              7
            </button>
            <button data-value="8" onClick={handleClick}>
              8
            </button>
            <button data-value="9" onClick={handleClick}>
              9
            </button>
            <button data-value="x" onClick={handleClick}>
              X
            </button>
            <button data-value="5" onClick={handleClick}>
              5
            </button>
            <button data-value="6" onClick={handleClick}>
              6
            </button>
            <button data-value="4" onClick={handleClick}>
              4
            </button>
            <button data-value="-" onClick={handleClick}>
              -
            </button>
            <button data-value="3" onClick={handleClick}>
              3
            </button>
            <button data-value="2" onClick={handleClick}>
              2
            </button>
            <button data-value="1" onClick={handleClick}>
              1
            </button>
            <button data-value="+" onClick={handleClick}>
              +
            </button>
            <button data-value="0" onClick={handleClick}>
              0
            </button>
            <button data-value="." onClick={handleClick}>
              .
            </button>
            <button className="equal" onClick={calculateResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
