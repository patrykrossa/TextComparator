import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config";
import { AddFileIcon } from "../../Icons/addFileIcon";

export const AddFile = ({ color }: { color: string }) => {
  return (
    <Flex flexDirection="column">
      <AddFileIcon color={color} />
      <Text
        color={color === colors.PRIMARY ? colors.PRIMARY2 : colors.SECONDARY2}
        fontWeight="600"
        fontSize="30px"
      >
        ADD YOUR FILE
      </Text>
    </Flex>
  );
};
