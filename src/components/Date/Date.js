import React from "react";

const Date = ({ purchaseDate }) => {
  const month = purchaseDate.toLocaleString("ko-KR", { month: "long" });
  const day = purchaseDate.toLocaleString("ko-KR", { day: "2-digit" });
  const year = purchaseDate.getFullYear();

  return (
    <div className="date">
      <div className="date__year">{year}</div>
      <div className="date__month">{month}</div>
      <div className="date__day">{day}</div>
    </div>
  );
};

export default Date;
