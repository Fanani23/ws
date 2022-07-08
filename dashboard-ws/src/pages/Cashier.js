import React, {useState} from "react";
import CashierInput from "./CashierInput";
import CashierSingle from "./CashierSingle";

const Cashier = () => {
  const [condition, setCondition] = useState(false);
  const onProcess = () => {
    setCondition(!condition);
  };
  condition ? <CashierSingle /> : <CashierInput onProcess={onProcess} />;
};

export default Cashier;
