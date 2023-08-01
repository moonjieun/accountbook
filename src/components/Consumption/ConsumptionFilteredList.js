// ConsumptionList.jsx 파일

import React, { useEffect, useState } from "react";
import FormDataFilterUI from "../FormDataFilterUI";
import ConsumptionItems from "./ConsumptionItems";

const ConsumptionList = ({ formState }) => {
  const [filteredType, setType] = useState("");
  const [filteredSort, setSort] = useState("");
  const [filteredStartDate, setStartDate] = useState(null);
  const [filteredEndDate, setEndDate] = useState(null);

  // 필터 함수
  const sortAndFilterItemList = () => {
    // 어떤 필터도 적용되지 않은 경우
    const isFilterActive =
      !!filteredType ||
      !!filteredStartDate ||
      !!filteredEndDate ||
      !!filteredSort;

    if (!isFilterActive) {
      // 필터가 적용되지 않았을 때 기존의 원본 formState를 반환합니다.
      return formState;
    }

    let copyItemList = [...formState];

    // 필터를 하나씩 적용합니다.
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
      <FormDataFilterUI
        filteredType={filteredType}
        setType={setType}
        filteredSort={filteredSort}
        setSort={setSort}
        filteredStartDate={filteredStartDate}
        setStartDate={setStartDate}
        filteredEndDate={filteredEndDate}
        setEndDate={setEndDate}
      />

      {/* sortAndFilterItemList 함수를 통해 필터링 된 리스트가 있는지 확인 후 렌더링 */}
      {sortAndFilterItemList().map((item) => (
        <ConsumptionItems
          key={item.id}
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
