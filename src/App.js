import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import FormData from "./components/FormData";
import ConsumptionList from "./components/Consumption/ConsumptionFilteredList";

const App = () => {
  const initialFormState = [
    {
      id: uuidv4(),
      name: "물",
      price: "3000",
      type: "식료품",
      purchaseDate: new Date(),
      memo: false,
      memoText: "삼다수",
      repurchase: false,
    },
    {
      id: uuidv4(),
      name: "컴퓨터",
      price: "300000",
      type: "가전",
      purchaseDate: new Date(),
      memo: false,
      memoText: "벤큐",
      repurchase: false,
    },
  ];

  const [formState, setFormState] = useState(initialFormState);

  const handleFormSubmit = (data) => {
    setFormState((prev) => [
      {
        id: uuidv4(),
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
