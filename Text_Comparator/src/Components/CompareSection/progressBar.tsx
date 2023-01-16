import { Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config";

export const ProgressBar = ({
  value,
  color,
}: {
  value: number;
  color: string;
}) => {
  return (
    <Flex
      flexDirection="column"
      fontWeight="600"
      fontSize="33px"
      w="55%"
      justifyContent="center"
      alignItems="center"
      gridGap="17px"
      color={colors.PRIMARY2}
    >
      <Text>{value}%</Text>
      <Progress
        value={value}
        bgColor={color === colors.PRIMARY ? colors.PRIMARY2 : colors.SECONDARY2}
        colorScheme={color === colors.PRIMARY ? "green" : "blue"}
        h="40px"
        w="100%"
        borderRadius="8px"
      />
    </Flex>
  );
};
