import React from "react";
import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";

export default function Profile({nickname, location}: {nickname: string, location: string}) {
  return (
    <Flex alignItems="center" mb={4} >
      <Avatar size="lg" mr={4} />
      <VStack align="start" spacing={0}>
        <Text fontWeight="bold">{nickname}</Text>
        <Text color="gray.500">{location}</Text>
      </VStack>
    </Flex>
  );
}