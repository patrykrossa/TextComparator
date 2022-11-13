import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config";
import { LightThemeIcon } from "../../Icons/lightThemeIcon";

export const Navlinks = () => {
  return (
    <Flex
      fontSize="16px"
      gridGap="54px"
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      <Box cursor="pointer" _hover={{ opacity: 0.6 }}>
        <LightThemeIcon />
      </Box>
      <Box cursor="pointer" _hover={{ color: colors.PRIMARY2 }}>
        FAQ
      </Box>
      <Box cursor="pointer" _hover={{ color: colors.PRIMARY2 }}>
        Sign in
      </Box>
    </Flex>
  );
};
