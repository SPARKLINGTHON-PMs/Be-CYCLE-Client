import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/react";

export default function Header({text}: {text: string}) {
  return (
    <header>
      <HStack>
        <ChevronLeftIcon />
        <h1>{text}</h1>
      </HStack>
    </header>
  );
}