import React, { useState } from "react";

const FormData = ({ onFormSubmit }) => {
  const initialFormData = {
    name: "",
    price: "",
    type: "",
    purchaseDate: new Date(),
    memo: false,
    memoText: "",
    repurchase: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onFormSubmit(formData);
    setFormData(initialFormData); // 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>가격</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>유형</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="식료품">식료품</option>
          <option value="가전">가전</option>
          <option value="애완">애완</option>
        </select>
      </div>
      <div>
        <label>구입 날짜</label>
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>메모</label>
        <input
          type="checkbox"
          name="memo"
          checked={formData.memo}
          onChange={handleChange}
        ></input>
        {formData.memo ? (
          <textarea
            id="memo"
            name="memoText"
            rows={2}
            cols={30}
            value={formData.memoText}
            onChange={handleChange}
          />
        ) : null}
      </div>
      <div>
        <label>재구매 의사</label>
        <input
          type="radio"
          name="repurchase"
          value={formData.repurchase}
          onChange={handleChange}
        />
        YES
        <input
          type="radio"
          name="repurchase"
          value={!formData.repurchase}
          onChange={handleChange}
        />
        NO
      </div>
      <div>
        <button type="submit">제출</button>
      </div>
    </form>
  );
};

export default FormData;
