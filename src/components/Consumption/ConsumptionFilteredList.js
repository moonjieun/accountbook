import React, { useEffect, useState } from "react";
import FormDataFilter from "../FormDataFilterUI";
import ConsumptionItems from "./ConsumptionItems";

const ConsumptionList = ({ formState }) => {
  const [filteredType, setType] = useState();
  const [filteredSort, setSort] = useState();
  const [filteredStartDate, setStartDate] = useState(new Date());
  const [filteredEndDate, setEndDate] = useState(new Date());

  //필터 함수
  const sortAndFilterItemList = () => {
    let copyItemList = [...formState];

    if (!!filteredType) {
      copyItemList = copyItemList.filter((v) => v.type === filteredType);
    }

    if (!!filteredStartDate && !!filteredEndDate) {
      copyItemList = copyItemList.filter(
        (v) =>
          v.purchaseDate >= new Date(filteredStartDate) &&
          v.purchaseDate <= new Date(filteredEndDate)
      );
    }
    if (filteredSort === "가격 높은 순") {
      copyItemList = copyItemList.sort((a, b) => b.price - a.price);
    } else if (filteredSort === "가격 낮은 순") {
      copyItemList = copyItemList.sort((a, b) => a.price - b.price);
    } else if (filteredSort === "최신 순") {
      copyItemList = copyItemList.sort(
        (a, b) => b.purchaseDate - a.purchaseDate
      );
    } else if (filteredSort === "오래된 순") {
      copyItemList = copyItemList.sort(
        (a, b) => a.purchaseDate - b.purchaseDate
      );
    }

    return copyItemList;
  };

  useEffect(() => {
    if (filteredStartDate > filteredEndDate) {
      alert("다시");
      setStartDate(new Date());
      setEndDate(new Date());
    }
  }, [filteredStartDate, filteredEndDate]);

  return (
    <>
      <FormDataFilter
        filteredType={filteredType}
        setType={setType}
        filteredSort={filteredSort}
        setSort={setSort}
        filteredStartDate={filteredStartDate}
        setStartDate={setStartDate}
        filteredEndDate={filteredEndDate}
        setEndDate={setEndDate}
      />
      {sortAndFilterItemList().map((item) => (
        <ConsumptionItems
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          type={item.type}
          purchaseDate={item.purchaseDate}
        />
      ))}
    </>
  );
};

export default ConsumptionList;
