import { useState, FC } from "react";
import "./style.scss";

interface ChildProps {
  text: string;
}

const Buttons: FC<ChildProps> = ({ text }) => {
  const [click, setClick] = useState("");

  function setOnClick() {
    console.log(click);
  }

  setOnClick();

  return (
    <button className="btn1" onClick={() => setClick(text)}>
      {text}
    </button>
  );
};

export default Buttons;
