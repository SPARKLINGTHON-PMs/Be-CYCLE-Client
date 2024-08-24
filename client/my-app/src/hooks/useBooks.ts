import { useState, useEffect } from "react";

type Book = {
  id: number;
  title: string;
};

export default function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // 책 데이터를 가져오는 API 요청 로직
    setBooks([
      { id: 1, title: "Book 아아" },
      { id: 2, title: "Book B" },
      // 추가 책 데이터
    ]);
  }, []);

  return { books };
}
