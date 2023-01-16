import { Flex } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config";

export enum primaryColor {
  GREEN,
  BLUE,
}

export const FileContainter = ({
  primaryColor,
  bgColor,
  children,
}: {
  primaryColor: primaryColor;
  bgColor: string;
  children?: any;
}) => {
  return (
    <Flex
      flexDirection="column"
      bgColor={bgColor}
      border={`2px solid ${
        primaryColor === 0 ? colors.SECONDARY : colors.PRIMARY
      }`}
      borderRadius="8px"
      alignItems="center"
      justifyContent="center"
      w="70vh"
      h="80vh"
    >
      {children}
    </Flex>
  );
};
