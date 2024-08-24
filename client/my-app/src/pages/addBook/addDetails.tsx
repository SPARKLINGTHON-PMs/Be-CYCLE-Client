import React, { useState } from "react";
import { useRouter } from "next/router";
import BookCard from "@/components/Common/BookCard";
import Header from "@/components/Common/Header";
import { Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function BookDetails({ selectedBook } : { selectedBook: { title: string, publisher: string, author: string } }) {

  const router = useRouter();

  // 카테고리 불러오는 로직
  const categories = ["소설", "과학", "역사", "IT", "자기계발", "만화", "요리", "예술", "기타"];
  const status = ["깨끗함", "거의 새것", "사용감 조금 있음", "사용감 많음"];
  const methods = ["직거래", "택배거래"];

  // 임의의 책 데이터
  const tempBook = {
      title: "책 제목",
      publisher : "출판사",
      author : "저자",
  };



  const [selCat, setSelCat] = useState<string[]>([]);  // 선택된 카테고리
  const [selStat, setSelStat] = useState<string[]>([]);  // 선택된 책 상태
  const [selMethod, setSelMethod] = useState<string[]>([]);  // 선택된 거래방식

  const handleCategorySelect = (category: string) => {
    if(selCat.includes(category)){
      setSelCat(selCat.filter((cat) => cat !== category));
    } else {
      setSelCat([...selCat, category]);
    }
  }

  const handleStatusSelect = (stat: string) => {
    if(selStat.includes(stat)){
      setSelStat(selStat.filter((status) => status !== stat));
    } else {
      setSelStat([...selStat, stat]);
    }
  }

  const handleMethodSelect = (method: string) => {
    if(selMethod.includes(method)){
      setSelMethod(selMethod.filter((meth) => meth !== method));
    } else {
      setSelMethod([...selMethod, method]);
    }
  }

  const handleComplete = () => {
    // 책 등록 완료 로직

    router.push('/mypage/mybooks');
  }

  return(
    <Flex direction={'column'}>
      <Header text={'책 등록하기'} />
      <VStack>
        <BookCard book={tempBook} />
        <HStack>
          <Text>카테고리</Text>
          {categories.map((category, index) => (
            <Button
              key={index}
              colorScheme={selCat.includes(category) ? "blue" : "gray"} // Change color when selected
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </HStack>
        <HStack>
          <Text>책 상태</Text>
          {status.map((stat, index) => (
            <Button
              key={index}
              colorScheme={selStat.includes(stat) ? "blue" : "gray"} // Change color when selected
              onClick={() => handleStatusSelect(stat)}
            >
              {stat}
            </Button>
          ))}
        </HStack>
        <HStack>
          <Text>거래방식</Text>
          {methods.map((method, index) => (
            <Button
              key={index}
              colorScheme={selMethod.includes(method) ? "blue" : "gray"} // Change color when selected
              onClick={() => handleMethodSelect(method)}
            >
              {method}
            </Button>
          ))}
        </HStack>

        <Button onClick={handleComplete}>완료</Button>
      </VStack>
    </Flex>
  )
}
