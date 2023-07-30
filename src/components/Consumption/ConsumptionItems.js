import React from "react";
import Date from "../Date/Date";

const ConsumptionItems = ({ name, price, type, purchaseDate }) => {
  return (
    <div>
      <Date purchaseDate={purchaseDate} />
      <span>{name}</span>
      <span>{type}</span>
      <span>{price}</span>
    </div>
  );
};

export default ConsumptionItems;
