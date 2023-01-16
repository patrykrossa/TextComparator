import { Flex, Text } from "@chakra-ui/react";
import { colors } from "../../config";
import { Difference } from "./compareSection";

export const CompareFile = ({
  file,
  primaryColor,
  bgColor,
  differences,
}: {
  file: any;
  primaryColor: string;
  bgColor: string;
  differences: Difference[];
}) => {
  const checkIfColor = (index: number) => {
    let flag = false;
    differences.forEach((diff: any) => {
      if (index >= diff.startIndex && index <= diff.endIndex) {
        flag = true;
      }
    });
    return flag;
  };

  return (
    <Flex
      color="white"
      w="70vh"
      maxW="70vh"
      h="80vh"
      bgColor={bgColor}
      px="45px"
      overflowY="scroll"
      borderTop={`5px solid ${
        primaryColor === colors.PRIMARY
          ? colors.COMP_PRIMARY_ACCENT
          : colors.COMP_SECONDARY_ACCENT
      }`}
      borderBottom={`5px solid ${
        primaryColor === colors.PRIMARY
          ? colors.COMP_PRIMARY_ACCENT
          : colors.COMP_SECONDARY_ACCENT
      }`}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
          //borderRadius: "8px",
          backgroundColor: `rgba(0, 0, 0, 0.1)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `${
            primaryColor === colors.PRIMARY
              ? colors.COMP_PRIMARY_ACCENT
              : colors.COMP_SECONDARY_ACCENT
          }`,
          "&::-webkit-scrollbar-track": {
            background: `rgba(255, 255, 0, 0.05)`,
          },
        },
      }}
      dir={primaryColor === colors.PRIMARY ? "ltr" : "rtl"}
    >
      <Flex dir="ltr" wrap="wrap">
        {file.split("").map((letter: any, index: number) => {
          return (
            <Text
              bgColor={
                checkIfColor(index)
                  ? primaryColor === colors.PRIMARY
                    ? colors.PRIMARY2
                    : colors.SECONDARY2
                  : "transparent"
              }
              _hover={
                checkIfColor(index)
                  ? {
                      bgColor:
                        primaryColor === colors.PRIMARY
                          ? colors.PRIMARY
                          : colors.SECONDARY,
                      cursor: "pointer",
                    }
                  : { bgColor: "transparent" }
              }
            >
              {letter}
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
};
