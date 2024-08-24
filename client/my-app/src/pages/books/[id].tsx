import React from "react";
import BookDetail from "../../components/Books/BookDetail";
import { Box } from "@chakra-ui/react";

export default function BookDetailPage({requestMode} : {requestMode: boolean}) {
  return (
    <Box>
      <BookDetail/>
    </Box>

  );
}
