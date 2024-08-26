import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Image,
  Input,
  Text,
  VStack,
  SimpleGrid,
  Tag,
  Spinner,
} from "@chakra-ui/react";

// 카테고리, 상태, 거래 방식 등 더미 데이터 설정
const categories = ["소설", "컴퓨터 / IT", "인문", "건강", "자기 계발"];
const statuses = ["GOOD", "POOR", "NEW"];
const tradeMethods = ["REQUEST", "ACCEPTED"];

// 더미 책 데이터
const dummyBooks = [
  {
    id: "1",
    title: "클린 코드",
    author: "로버트 C. 마틴",
    publisher: "인사이트",
  },
  { id: "2", title: "자바의 정석", author: "남궁성", publisher: "도우출판" },
  {
    id: "3",
    title: "이펙티브 자바",
    author: "조슈아 블로크",
    publisher: "인사이트",
  },
];

const UploadBook = () => {
  const router = useRouter();
  const [step, setStep] = useState(1); // 단계 관리
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [ocrTexts, setOcrTexts] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [status, setStatus] = useState<string | null>("GOOD"); // 상태를 'GOOD'으로 기본 설정
  const [tradeState, setTradeState] = useState<string | null>("REQUEST"); // 거래 상태를 'REQUEST'로 기본 설정
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const telNum = "01022222222"; // 고정된 전화번호

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleNextStep = async () => {
    if (!selectedImage) {
      alert("이미지를 먼저 업로드하세요.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      // 서버에서 OCR 텍스트 가져오기
      const response = await fetch("http://localhost:8080/book/upload", {
        method: "POST",
        body: formData,
      });

      // 응답 내용 확인
      const text = await response.text();
      console.log("Raw Response:", text);

      // JSON 파싱 시도
      const data = JSON.parse(text);

      setOcrTexts(data.map((book: any) => book.title)); // 서버에서 받은 OCR 텍스트를 설정
      setStep(2);
    } catch (error) {
      console.error("Error:", error);
      alert("OCR 작업 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleBookSelect = (bookId: string) => {
    setSelectedBook(bookId);
    setStep(3);
  };

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId]
    );
  };

  const handleSubmit = async () => {
    if (!selectedImage || !status || !tradeState || !selectedBook) {
      alert("모든 정보를 입력하세요.");
      return;
    }

    const create_dto = JSON.stringify({
      originalBookId: selectedBook,
      categoryIds: selectedCategories,
      status: status,
      tradeState: tradeState,
    });

    const formData = new FormData();
    formData.append(
      "create_dto",
      new Blob([create_dto], { type: "application/json" })
    );
    formData.append("image", selectedImage); // 파일 형식의 이미지 추가

    try {
      const response = await fetch(
        `http://localhost:8080/book?telNum=${telNum}`, // 고정된 telNum 사용
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("책 등록이 완료되었습니다.");
        router.push("/mypage/mybooks");
      } else {
        throw new Error("책 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("책 등록 중 오류가 발생했습니다.");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1: // 이미지 업로드 단계
        return (
          <VStack spacing={4} align="stretch" p={4}>
            <Text fontSize="lg" fontWeight="bold">
              책 등록하기
            </Text>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              width="100%"
              paddingBottom="80%" // 이미지 비율 수정
              bg="gray.100"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {selectedImage ? (
                <Image
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Book"
                  objectFit="cover"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                />
              ) : (
                <Text>업로드 할 사진이 없습니다!</Text>
              )}
            </Box>
            <Input type="file" onChange={handleImageUpload} />
            <Button
              colorScheme="teal"
              onClick={handleNextStep}
              isLoading={loading}
            >
              다음
            </Button>
          </VStack>
        );

      case 2: // 책 추천 단계
        return (
          <VStack spacing={4} align="stretch" p={4}>
            <Text fontSize="lg" fontWeight="bold">
              OCR 결과 및 유사한 책 선택
            </Text>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <VStack align="stretch">
                  <Text>OCR 인식된 텍스트:</Text>
                  {ocrTexts.map((text, index) => (
                    <Text key={index}>{text}</Text>
                  ))}
                </VStack>
                <VStack align="stretch">
                  <Text>유사한 책 목록:</Text>
                  {dummyBooks.map((book) => (
                    <Box
                      key={book.id}
                      p={4}
                      bg="white"
                      borderRadius="lg"
                      boxShadow="md"
                      onClick={() => handleBookSelect(book.id)}
                      cursor="pointer"
                      _hover={{ bg: "gray.200" }}
                    >
                      <Text>{book.title}</Text>
                      <Text>저자: {book.author}</Text>
                      <Text>출판사: {book.publisher}</Text>
                    </Box>
                  ))}
                </VStack>
              </>
            )}
          </VStack>
        );

      case 3: // 세부 정보 선택 단계
        return (
          <VStack spacing={4} align="stretch" p={4}>
            <Text fontSize="lg" fontWeight="bold">
              책 정보 입력
            </Text>
            <Text>카테고리</Text>
            <SimpleGrid columns={3} spacing={2}>
              {categories.map((category, index) => (
                <Tag
                  key={index}
                  onClick={() => handleCategorySelect(index)}
                  cursor="pointer"
                  bg={
                    selectedCategories.includes(index) ? "teal.500" : "gray.200"
                  }
                  color={selectedCategories.includes(index) ? "white" : "black"}
                >
                  {category}
                </Tag>
              ))}
            </SimpleGrid>

            <Text>상태</Text>
            <SimpleGrid columns={3} spacing={2}>
              {statuses.map((statusItem, index) => (
                <Tag
                  key={index}
                  onClick={() => setStatus(statusItem)}
                  cursor="pointer"
                  bg={status === statusItem ? "teal.500" : "gray.200"}
                  color={status === statusItem ? "white" : "black"}
                >
                  {statusItem}
                </Tag>
              ))}
            </SimpleGrid>

            <Text>거래 방식</Text>
            <SimpleGrid columns={2} spacing={2}>
              {tradeMethods.map((method, index) => (
                <Tag
                  key={index}
                  onClick={() => setTradeState(method)}
                  cursor="pointer"
                  bg={tradeState === method ? "teal.500" : "gray.200"}
                  color={tradeState === method ? "white" : "black"}
                >
                  {method}
                </Tag>
              ))}
            </SimpleGrid>

            <Button colorScheme="teal" onClick={handleSubmit}>
              완료
            </Button>
          </VStack>
        );

      default:
        return null;
    }
  };

  return (
    <VStack spacing={4} align="stretch" p={4}>
      {renderStep()}
    </VStack>
  );
};

export default UploadBook;
