import React from "react";
import { Avatar, Card, HStack, Text, VStack } from "@chakra-ui/react";

export default function NotificationCard({ message, date }: { message: string, date: string }) {
  return (
    <Card padding={3}>
      <HStack>
        <Avatar size="md" mr={4} />
        <VStack>
          <Text>{message}</Text>
          <Text>{date}</Text>
        </VStack>
      </HStack>
    </Card>
  );
}