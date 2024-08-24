import React, {useState}from "react";
import { useRouter } from "next/router";
import { Badge, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Header from "../Common/Header";
import Profile from "../Common/Profile";


export default function BookDetail() {
  const requestMode = useState(true);
  const router = useRouter();
  const { id } = router.query;

  // 책 정보를 가져오는 로직 (API 요청)
  const book = {
    id,
    title: "Book A",
    publisher: "출판사",
    published_date: "2021-01-01",
    description: "Description of Book A",
    categories: ["소설", "과학"],
    status: ["깨끗함"],
    methods: ["직거래"]
  };

  // 책 주인 정보를 가져오는 로직 (예: API 요청)
  const owner = { nickname: "닉네임", location: "OO도 OO시" };

  const handleRequest = () => {
    // 교환 신청 로직
  }

  const handleSelect = () => {
    // 교환할 책 선택 로직
  }

  return (
    <Flex direction={'column'}>
      <Header text={book.title}/>
      <Flex>
        <Image src="https://via.placeholder.com/300" alt={book.title} />
      </Flex>
      <Text>{book.title}</Text>
      <Text>{book.publisher}</Text>
      <Text>{book.published_date}</Text>
      <Profile nickname={owner.nickname} location={owner.location}/>
      <HStack>
        <Text>카테고리</Text>
        {book.categories.map((category, index) => (
          <Badge key={index} colorScheme="gray">
            {category}
          </Badge>
        ))}
      </HStack>
      <HStack>git
        <Text>책 상태</Text>
        {book.status.map((stat, index) => (
          <Badge key={index} colorScheme="gray" ml='1'>
            {stat}
          </Badge>
        ))}
      </HStack>
      <HStack>
        <Text>거래방식</Text>
        {book.methods.map((method, index) => (
          <Badge key={index} colorScheme="gray">
            {method}
          </Badge>
        ))}
      </HStack>
      {requestMode ?
        <Button onClick={handleRequest}>교환 신청</Button> :
        <Button onClick={handleSelect}>이 책이랑 교환하기</Button>
      }

    </Flex>
  );
}
