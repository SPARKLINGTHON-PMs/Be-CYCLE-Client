import React from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

interface HeaderProps {
  text: string;
}

export default function Header({ text }: HeaderProps) {
  const router = useRouter();

  return (
    <Flex
      as="header"
      width="100%"
      padding="4"
      alignItems="center"
      backgroundColor="teal.500"
      color="white"
      boxShadow="sm"
    >
      <IconButton
        icon={<ArrowBackIcon />}
        aria-label="Go back"
        variant="ghost"
        onClick={() => router.back()}
      />
      <Text marginLeft="4" fontWeight="bold" fontSize="lg">
        {text}
      </Text>
    </Flex>
  );
}
