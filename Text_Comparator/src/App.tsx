import * as React from "react";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { colors } from "./config";
import { Navbar } from "./Components/Navbar/Navbar";
import { CompareSection } from "./Components/CompareSection/compareSection";

const theme = extendTheme({
  colors: {
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: colors.SECONDARY,
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: colors.PRIMARY,
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex
      bg={colors.BG_DARK}
      px="50px"
      h="100vh"
      alignItems="flex-start"
      flexDirection="column"
    >
      <Navbar />
      <CompareSection />
    </Flex>
  </ChakraProvider>
);
