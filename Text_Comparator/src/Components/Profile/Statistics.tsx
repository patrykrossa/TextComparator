import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../config";
import { Chart } from "./Chart";

export const Statistics = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <Flex flexDirection="column" p="50px 60px">
      <Flex fontSize="21px" fontWeight="600" gap="20px" marginBottom="150px">
        <Flex onClick={() => setActive(0)} position="relative" cursor="pointer">
          Your stats
          {active === 0 && (
            <Box
              h="4px"
              w="100%"
              position="absolute"
              bottom="-5px"
              bg={colors.COMP_PRIMARY_ACCENT}
            />
          )}
        </Flex>
        <Flex onClick={() => setActive(1)} position="relative" cursor="pointer">
          Global stats
          {active === 1 && (
            <Box
              h="4px"
              w="100%"
              position="absolute"
              bottom="-5px"
              bg={colors.COMP_PRIMARY_ACCENT}
            />
          )}
        </Flex>
      </Flex>
      <Chart />
    </Flex>
  );
};
