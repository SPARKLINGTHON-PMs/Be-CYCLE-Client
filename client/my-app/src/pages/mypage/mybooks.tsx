import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  SimpleGrid,
  Image,
  Tag,
  VStack,
} from "@chakra-ui/react";
import NavBar from "@/components/Common/NavBar";

// 사용자 프로필 인터페이스 정의
interface Profile {
  nickname: string;
  location: string;
  categories: string[];
}

// 책 인터페이스 정의
interface Book {
  id: number;
  title: string;
  imageUrl?: string;
}

// 더미 사용자 프로필 데이터
const myProfile: Profile = {
  nickname: "김홍자",
  location: "충청남도 대전광역시",
  categories: ["소설", "컴퓨터 / IT", "인문"],
};

export default function MyBooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const router = useRouter();

  useEffect(() => {
    // 전체 게시글 데이터를 가져오는 함수
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/book"); // 전체 게시글 조회 API
        if (!response.ok) {
          throw new Error("게시글 데이터를 가져오는 데 실패했습니다.");
        }
        const data = await response.json();

        // 이미지 URL 생성 및 책 데이터 설정
        const mappedBooks = await Promise.all(
          data.map(async (post: any) => {
            const imageResponse = await fetch(
              `http://localhost:8080/api/a1/image/${post.imageId}`
            );
            if (!imageResponse.ok) {
              throw new Error("이미지를 가져오는 데 실패했습니다.");
            }
            const imageBlob = await imageResponse.blob();
            const imageUrl = URL.createObjectURL(imageBlob);

            return {
              id: post.id,
              title: post.title,
              imageUrl,
            };
          })
        );

        setBooks(mappedBooks);
      } catch (error) {
        console.error("책 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Flex direction="column" minH="100vh" p={4} bg="#F9F9F9">
      {/* 프로필 섹션 */}
      <Box p={4} bg="white" borderRadius="lg" boxShadow="md" mb={6}>
        <Flex align="center" direction="row">
          <Avatar
            size="xl"
            name={myProfile.nickname}
            src="/images/avatar1.png"
          />
          <Box ml={4} flex="1">
            <Text fontSize="lg" fontWeight="bold">
              {myProfile.nickname}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {myProfile.location}
            </Text>
            <Flex mt={2} wrap="wrap">
              {myProfile.categories.map((category, index) => (
                <Tag
                  key={index}
                  size="sm"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="teal"
                  mr={2}
                  mb={2}
                >
                  {category}
                </Tag>
              ))}
            </Flex>
          </Box>
          <Button
            size="sm"
            variant="outline"
            onClick={() => router.push("/editProfile")}
            leftIcon={
              <Box as="span" className="material-icons">
                edit
              </Box>
            }
          >
            수정
          </Button>
        </Flex>
      </Box>

      {/* 나의 책장 섹션 */}
      <VStack align="flex-start" spacing={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          나의 책장
        </Text>
        <SimpleGrid columns={3} spacing={4}>
          {books.map((book) => (
            <Box key={book.id} textAlign="center">
              {book.imageUrl && (
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="lg"
                  mb={2}
                />
              )}
              <Text fontSize="sm" fontWeight="medium" isTruncated>
                {book.title}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>

      {/* 책 추가하기 버튼 */}
      <Button
        onClick={() => router.push("/addBook/uploadImage")}
        colorScheme="teal"
        size="lg"
        borderRadius="full"
        position="fixed"
        bottom="24px"
        right="24px"
        boxShadow="lg"
      >
        +
      </Button>

      {/* 하단 네비게이션 바 */}
      <NavBar />
    </Flex>
  );
}
