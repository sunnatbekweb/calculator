function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.dataset.value);
    
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <h2 className="value">2+2</h2>
          <h1 className="result">=4</h1>

          <div className="buttons_wrapper">
            <button data-value="C" onClick={handleClick}>C</button>
            <button data-value="%" onClick={handleClick}>%</button>
            <button data-value="/" onClick={handleClick}>/</button>
            <button data-value="de onClick={handleClick}l">icon</button>
            <button data-value="7" onClick={handleClick}>7</button>
            <button data-value="8" onClick={handleClick}>8</button>
            <button data-value="9" onClick={handleClick}>9</button>
            <button data-value="x" onClick={handleClick}>X</button>
            <button data-value="5" onClick={handleClick}>5</button>
            <button data-value="6" onClick={handleClick}>6</button>
            <button data-value="4" onClick={handleClick}>4</button>
            <button data-value="-" onClick={handleClick}>-</button>
            <button data-value="3" onClick={handleClick}>3</button>
            <button data-value="2" onClick={handleClick}>2</button>
            <button data-value="1" onClick={handleClick}>1</button>
            <button data-value="+" onClick={handleClick}>+</button>
            <button data-value="0" onClick={handleClick}>0</button>
            <button data-value="." onClick={handleClick}>.</button>
            <button className="equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
