import React from "react";
import BookList from "../../components/Books/BookList";
import Profile from "@/components/Common/Profile";
import { Button, Text, VStack } from "@chakra-ui/react";

const my_profile = {
  nickname: "닉네임",
  location: "OO도 OO시"
};

export default function MyBooksPage() {
  return (
    <VStack>
      <Profile nickname={my_profile.nickname} location={my_profile.location} />
      <Text>나의 책장</Text>
      <BookList />
      <Button>책 추가하기</Button>
    </VStack>
  );
}
