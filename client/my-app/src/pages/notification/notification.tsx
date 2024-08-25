import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, Text, VStack, Avatar, Circle } from "@chakra-ui/react";
import Header from "@/components/Common/Header";

export default function NotificationList() {
  const router = useRouter();

  // 더미 알림 데이터
  const notifications = [
    {
      id: 1,
      name: "홍길동",
      message: "홍길동님이 <불안세대>를 교환하고 싶어해요!",
      avatar: "/images/avatar1.png",
      isNew: true,
    },
    {
      id: 2,
      name: "박남길",
      message: "박남길님이 교환 할 책을 선택했어요!",
      avatar: "/images/avatar2.png",
      isNew: false,
    },
    {
      id: 3,
      name: "이민혁",
      message: "이민혁님이 <적절한 영어 표현들>을 교환하고 싶어해요!",
      avatar: "/images/avatar3.png",
      isNew: false,
    },
  ];

  const handleNotificationClick = (id: number) => {
    // 알림을 클릭했을 때, 요청 상세 페이지로 이동합니다.
    router.push(`/notification/${id}`);
  };

  return (
    <Flex direction="column" minH="100vh" bg="#F9F9F9">
      <Header text="요청들" />
      <VStack spacing={4} p={4}>
        {notifications.map((notification) => (
          <Box
            key={notification.id}
            p={4}
            w="100%"
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            onClick={() => handleNotificationClick(notification.id)}
            cursor="pointer"
            transition="background-color 0.2s"
            _hover={{ bg: "#F0F0F0" }}
            display="flex"
            alignItems="center"
          >
            <Flex align="center" w="full">
              <Box position="relative">
                <Avatar
                  name={notification.name}
                  src={notification.avatar} // 여기에 아바타 이미지 URL을 지정합니다.
                  size="lg"
                />
                {notification.isNew && (
                  <Circle
                    size="10px"
                    bg="red.500"
                    position="absolute"
                    top="0"
                    right="0"
                    border="2px solid white"
                  />
                )}
              </Box>
              <Box ml={4}>
                <Text fontWeight="bold" fontSize="md" color="#333333">
                  {notification.name}
                </Text>
                <Text fontSize="sm" color="#666666">
                  {notification.message}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </VStack>
    </Flex>
  );
}
