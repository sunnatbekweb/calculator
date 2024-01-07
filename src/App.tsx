import React from 'react';
import Buttons from './Ui/Buttons';
import Button2 from './Ui/Button2';

function App() {
  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="calculator_index">
            <h2>0</h2>
          </div>
          <div className="calculator_buttons">
            <div className='calculator_button'>
              <Buttons text={"+"} />
              <Buttons text={"-"} />
              <Buttons text={"x"} />
              <Buttons text={"7"} />
              <Buttons text={"8"} />
              <Buttons text={"9"} />
              <Buttons text={"4"} />
              <Buttons text={"5"} />
              <Buttons text={"6"} />
              <Buttons text={"1"} />
              <Buttons text={"2"} />
              <Buttons text={"3"} />
              <button className='null_btn'>0</button>
              <Buttons text={"."} />
              <Buttons text={"AC"} />
            </div>
            <div>
              <Buttons text={'%'} />
              <Button2 />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
