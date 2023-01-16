import { Box, Flex, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { colors } from "../../config";
import { LightThemeIcon } from "../../Icons/lightThemeIcon";
import { Form } from "../Form/Form";

export const Navlinks = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    setLogged(localStorage.getItem("user") !== null);
  }, [localStorage.getItem("user")]);

  return (
    <Flex
      fontSize="16px"
      gridGap="54px"
      color="white"
      alignItems="center"
      justifyContent="center"
    >
      {isOpen && <Form isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Box cursor="pointer" _hover={{ opacity: 0.6 }}>
        <LightThemeIcon />
      </Box>
      <Box cursor="pointer" _hover={{ color: colors.PRIMARY2 }}>
        FAQ
      </Box>
      {logged ? (
        <Link
          href="/profile"
          _hover={{ textDecoration: "none", color: colors.PRIMARY2 }}
        >
          {localStorage.getItem("user")}
        </Link>
      ) : (
        <Box
          cursor="pointer"
          _hover={{ color: colors.PRIMARY2 }}
          onClick={() => setIsOpen(true)}
        >
          Sign in
        </Box>
      )}
    </Flex>
  );
};
