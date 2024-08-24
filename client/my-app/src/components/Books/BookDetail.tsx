import React from "react";
import { useRouter } from "next/router";

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;

  // 책 정보를 가져오는 로직 (예: API 요청)
  const book = { id, title: "Book A", description: "Description of Book A" };

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <button>Exchange this book</button>
    </div>
  );
}
