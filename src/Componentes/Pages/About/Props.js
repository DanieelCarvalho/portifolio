import React from "react";

const Props = ({ btn, btn2, btn3, children }) => {
  return (
    <div>
      {children}
      <button onClick={btn2}>Clique para t1</button>
      <button onClick={btn}>Clique para t2</button>
      <button onClick={btn3}>Clique para t3</button>
    </div>
  );
};

export default Props;
