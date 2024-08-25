import React, { useState } from "react";
import { useRouter } from "next/router";
import BookCard from "@/components/Common/BookCard";
import Header from "@/components/Common/Header";
import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function BookDetails({
  selectedBook,
}: {
  selectedBook: { title: string; publisher: string; author: string };
}) {
  const router = useRouter();

  // 카테고리 불러오는 로직
  const categories = [
    "소설",
    "과학",
    "역사",
    "IT",
    "자기계발",
    "만화",
    "요리",
    "예술",
    "기타",
  ];
  const status = ["깨끗함", "거의 새것", "사용감 조금 있음", "사용감 많음"];
  const methods = ["직거래", "택배거래"];

  // 임의의 책 데이터
  const tempBook = {
    title: "책 제목",
    publisher: "출판사",
    author: "저자",
  };

  const [selCat, setSelCat] = useState<string[]>([]); // 선택된 카테고리
  const [selStat, setSelStat] = useState<string[]>([]); // 선택된 책 상태
  const [selMethod, setSelMethod] = useState<string[]>([]); // 선택된 거래방식

  const handleCategorySelect = (category: string) => {
    if (selCat.includes(category)) {
      setSelCat(selCat.filter((cat) => cat !== category));
    } else {
      setSelCat([...selCat, category]);
    }
  };

  const handleStatusSelect = (stat: string) => {
    if (selStat.includes(stat)) {
      setSelStat(selStat.filter((status) => status !== stat));
    } else {
      setSelStat([...selStat, stat]);
    }
  };

  const handleMethodSelect = (method: string) => {
    if (selMethod.includes(method)) {
      setSelMethod(selMethod.filter((meth) => meth !== method));
    } else {
      setSelMethod([...selMethod, method]);
    }
  };

  const handleComplete = () => {
    // 책 등록 완료 로직
    router.push("/mypage/mybooks");
  };

  return (
    <Flex direction={"column"} align="center" maxW="800px" mx="auto" mt="4">
      <Header text={"책 등록하기"} />
      <VStack spacing={6} width="100%" align="stretch">
        <BookCard book={tempBook} />
        <HStack spacing={4} flexWrap="wrap" justifyContent="center">
          <Text minW="70px">카테고리</Text>
          {categories.map((category, index) => (
            <Button
              key={index}
              colorScheme={selCat.includes(category) ? "blue" : "gray"}
              onClick={() => handleCategorySelect(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </HStack>
        <HStack spacing={4} flexWrap="wrap" justifyContent="center">
          <Text minW="70px">책 상태</Text>
          {status.map((stat, index) => (
            <Button
              key={index}
              colorScheme={selStat.includes(stat) ? "blue" : "gray"}
              onClick={() => handleStatusSelect(stat)}
              size="sm"
            >
              {stat}
            </Button>
          ))}
        </HStack>
        <HStack spacing={4} flexWrap="wrap" justifyContent="center">
          <Text minW="70px">거래방식</Text>
          {methods.map((method, index) => (
            <Button
              key={index}
              colorScheme={selMethod.includes(method) ? "blue" : "gray"}
              onClick={() => handleMethodSelect(method)}
              size="sm"
            >
              {method}
            </Button>
          ))}
        </HStack>
        <Button onClick={handleComplete} colorScheme="teal" size="lg" mt="4">
          완료
        </Button>
      </VStack>
    </Flex>
  );
}
