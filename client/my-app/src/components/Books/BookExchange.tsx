import React from "react";

export default function BookExchange() {
  // 교환 가능한 책 리스트
  const exchangeableBooks = [
    { id: 1, title: "Book B" },
    { id: 2, title: "Book C" },
    // 추가 책 데이터
  ];

  return (
    <div>
      <h3>Exchange Your Book</h3>
      <ul>
        {exchangeableBooks.map((book) => (
          <li key={book.id}>
            {book.title} <button>Request Exchange</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
