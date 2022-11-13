import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config";
import { Navlinks } from "./Navlinks";

export const Navbar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      py="20px"
      position="relative"
    >
      <Text
        bgGradient={`linear-gradient(90deg, ${colors.SECONDARY} 0%, ${colors.PRIMARY} 35.42%)"`}
        bgClip="text"
        fontWeight="800"
        fontSize="27px"
      >
        TEXTCOMPARATOR
      </Text>
      <Navlinks />
      <Box
        h="2px"
        w="100vw"
        position="absolute"
        bottom="0"
        left="-50px"
        bgGradient={`linear-gradient(90deg, ${colors.SECONDARY} 0%, ${colors.PRIMARY} 35.42%)"`}
      />
    </Flex>
  );
};
