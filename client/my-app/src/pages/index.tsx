import React from "react";
// import "../styles/globals.css";
// import "../styles/components.css";
import BookList from "../components/Books/BookList";

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to Book Exchange</h2>
      <BookList />
    </div>
  );
}
