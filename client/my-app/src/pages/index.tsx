import React from "react";
// import "../styles/globals.css";
// import "../styles/components.css";

import BookList from "../components/Books/BookList";

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to Book Exchange</h2>
      <h3>Books You Might Be Interested In</h3>
      <BookList />
    </div>
  );
}
