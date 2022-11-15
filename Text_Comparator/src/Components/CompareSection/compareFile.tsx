import { Flex, Box } from "@chakra-ui/react";
import { colors } from "../../config";

export const CompareFile = ({
  file,
  primaryColor,
  bgColor,
}: {
  file: any;
  primaryColor: string;
  bgColor: string;
}) => {
  return (
    <Flex
      w="70vh"
      h="80vh"
      bgColor={bgColor}
      px="45px"
      alignItems="center"
      flexDirection="column"
      overflow="auto"
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
          width: "13px",
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
      <Box dir="ltr">{file}</Box>
    </Flex>
  );
};
