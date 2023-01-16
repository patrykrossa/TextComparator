import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";

export const Nav = () => {
  return (
    <Flex
      color="white"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gridGap="20px"
    >
      <ChevronUpIcon
        color={colors.COMP_PRIMARY_ACCENT}
        boxSize="45px"
        cursor="pointer"
        _hover={{ opacity: "0.6" }}
      />
      <Flex>
        74 /&nbsp;<Text opacity="0.6">132</Text>
      </Flex>
      <ChevronDownIcon
        color={colors.COMP_SECONDARY_ACCENT}
        boxSize="45px"
        cursor="pointer"
        _hover={{ opacity: "0.6" }}
      />
    </Flex>
  );
};
