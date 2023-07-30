import React, { useState } from "react";
import "./App.css";
import FormData from "./components/FormData";
import ConsumptionList from "./components/Consumption/ConsumptionFilteredList";

const App = () => {
  const initialFormState = {
    id: "",
    name: "",
    price: "",
    type: "",
    purchaseDate: new Date(),
    memo: false,
    memoText: "",
    repurchase: false,
  };

  const [formState, setFormState] = useState([initialFormState]);

  const handleFormSubmit = (data) => {
    setFormState((prev) => [
      {
        id: Math.random().toString(),
        name: data.name,
        price: data.price,
        type: data.type,
        purchaseDate: new Date(data.purchaseDate),
        memo: data.memo,
        memoText: data.memoText,
        repurchase: data.repurchase,
      },
      ...prev,
    ]);
  };

  return (
    <>
      <FormData onFormSubmit={handleFormSubmit} />
      <ConsumptionList formState={formState} />
    </>
  );
};

export default App;
