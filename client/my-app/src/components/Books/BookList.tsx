import React from "react";

const books = [
  { id: 1, title: "Book A" },
  { id: 2, title: "Book B" },
  // 추가 책 데이터
];

export default function BookList() {
  return (
    <div>
      <h3>Books You Might Be Interested In</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
