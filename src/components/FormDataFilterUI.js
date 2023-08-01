import React from "react";

const FormDataFilter = ({
  filteredType,
  setType,
  filteredSort,
  setSort,
  filteredStartDate,
  setStartDate,
  filteredEndDate,
  setEndDate,
}) => {
  const handleChangeTypeFilter = (e) => {
    setType(e.target.value);
  };
  const handleChangeSortFilter = (e) => {
    setSort(e.target.value);
  };
  const handleChangeStartDateFilter = (e) => {
    setStartDate(e.target.value);
  };
  const handleChangeEndDateFilter = (e) => {
    setEndDate(e.target.value);
  };

  //  filteredType ===  formState.type과 같은지 검사
  //  가격 높은 순 ===  formState.price 가격 가져와서 높은순으로 sort 해주고 리스트 보여주기
  //  가격 낮은 순 ===  formState.price 가격 가져와서 역순으로 sort 해주고,
  return (
    <div className="filter">
      <div className="category">
        <select value={filteredType} onChange={handleChangeTypeFilter}>
          <option value="">유형 필터</option>
          <option value="식료품">식료품</option>
          <option value="가전">가전</option>
          <option value="애완">애완</option>
        </select>
      </div>
      <div className="sort">
        <select value={filteredSort} onChange={handleChangeSortFilter}>
          <option value="">정렬 기준</option>
          <option value="가격 높은 순">가격 높은 순</option>
          <option value="가격 낮은 순">가격 낮은 순</option>
          <option value="최신 순">최신 순</option>
          <option value="오래된 순">오래된 순</option>
        </select>
      </div>
      <div className="date">
        <label>시작기간</label>
        <input
          type="date"
          value={filteredStartDate || ""}
          onChange={handleChangeStartDateFilter}
        ></input>
        <label>끝기간</label>
        <input
          type="date"
          value={filteredEndDate || ""}
          onChange={handleChangeEndDateFilter}
        ></input>
      </div>
    </div>
  );
};

export default FormDataFilter;
