import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Header from "@/components/Common/Header";

export default function ExchangeDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Modal control
  const [tradeMethod, setTradeMethod] = useState("");

  const handleCompleteTradeMethod = () => {
    // 거래 방식 작성 완료 로직
    onClose();
  };

  return (
    <Flex direction="column" minH="100vh">
      <Header text="OOO님과의 교환" />
      <Box flex="1" p="16px">
        <VStack spacing="24px">
          <Flex
            bg="#F9F9F9"
            borderRadius="12px"
            p="16px"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <Flex direction="column" align="center">
              <Image
                src="/images/book-placeholder.png"
                boxSize="100px"
                alt="My Book"
              />
              <Text>내가 고른 책</Text>
            </Flex>
            <Text fontSize="3xl" align="center">
              ➔
            </Text>
            <Flex direction="column" align="center">
              <Image src="/images/book2.png" boxSize="100px" alt="Other Book" />
              <Text>상대가 고른 책</Text>
            </Flex>
          </Flex>

          <Button onClick={() => alert("다시 책 선택")}>책 다시 선택</Button>

          <Text>OOO님의 희망 거래 방식</Text>
          <Text>나의 거래 방식을 작성해야 볼 수 있어요!</Text>

          <Button onClick={onOpen} colorScheme="teal">
            나의 거래 방식 작성
          </Button>
          <HStack spacing="16px">
            <Button onClick={() => alert("매칭 취소하기")}>
              매칭 취소하기
            </Button>
            <Button onClick={() => alert("교환 완료")}>교환 완료</Button>
          </HStack>
        </VStack>
      </Box>

      {/* 거래 방식 작성 모달 */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>나의 거래 방식 작성</ModalHeader>
          <IconButton
            aria-label="Close modal"
            icon={<CloseIcon />}
            onClick={onClose}
            variant="ghost"
            position="absolute"
            top={2}
            right={2}
          />
          <ModalBody>
            <Textarea
              placeholder="직거래는 희망 장소와 시간을 적어주세요. 택배거래는 주소를 적어주세요."
              value={tradeMethod}
              onChange={(e) => setTradeMethod(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={handleCompleteTradeMethod}>
              완료
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
