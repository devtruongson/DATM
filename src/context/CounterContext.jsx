import React, { useState } from "react";
export const CountContext = React.createContext();
const CounterContext = (props) => {
  const [count] = useState(1);
  return (
    <div>
      <CountContext.Provider value={count}>
        {props?.children}
      </CountContext.Provider>
    </div>
  );
};
export default CounterContext;
