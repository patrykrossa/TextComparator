import { Box, Link } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../../config";
import { useLocation } from "react-router-dom";

export const ProfileNavItem = ({
  path,
  text,
}: {
  path: string;
  text: string;
}) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <Link
      href={path}
      h="15%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      _hover={{ textDecoration: "none", opacity: 0.6 }}
    >
      {location.pathname === path && (
        <Box
          h="70%"
          w="10px"
          bg={colors.COMP_PRIMARY_ACCENT}
          position="absolute"
          left="0"
          top="10px"
        />
      )}
      {text}
    </Link>
  );
};
