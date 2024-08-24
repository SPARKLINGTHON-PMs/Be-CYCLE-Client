import React from "react";
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import Header from "@/components/Common/Header";

export default function AddBook() {

  const handleSelectImage = () => {
    // 갤러리에서 이미지 선택
  }

  const handleUploadImage = () => {
    // 이미지 Vision API로 업로드
  }

  return (
    <Flex direction={'column'}>
      <Header text={'책 등록하기'} />
      <Stack >
        <Box width={'300px'} height={'400px'}>
          <Image src="https://via.placeholder.com/300" alt="책 이미지" />
        </Box>
        <Button onClick={handleSelectImage}>갤러리에서 이미지 선택</Button>
        <Button onClick={handleUploadImage}>이미지 업로드</Button>
      </Stack>
    </Flex>
  )
};