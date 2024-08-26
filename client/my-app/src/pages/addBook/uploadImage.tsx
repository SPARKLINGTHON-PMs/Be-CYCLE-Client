import React, { useState } from "react";
import { Box, Button, Flex, Image, VStack, Text } from "@chakra-ui/react";
import Header from "@/components/Common/Header";

export default function UploadImage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Flex direction="column" minH="100vh">
      <Header text="책 등록하기" />
      <VStack spacing={4} p={4}>
        <Box>
          {image ? (
            <Image src={image} alt="Uploaded Image" boxSize="300px" />
          ) : (
            <Box
              w="300px"
              h="400px"
              bg="gray.100"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>이미지를 선택하세요</Text>
            </Box>
          )}
        </Box>
        <Button as="label">
          갤러리에서 선택하기
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </Button>
      </VStack>
    </Flex>
  );
}
