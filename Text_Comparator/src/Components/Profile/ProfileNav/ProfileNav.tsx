import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { ProfileNavItem } from "./ProfileNavItem";

export const ProfileNav = () => {
  return (
    <Flex
      flexDirection="column"
      bg="#1e1e1e"
      borderRadius="15px"
      justifyContent="center"
      fontSize="25px"
      fontWeight="700"
      h="80%"
      w="15%"
    >
      <ProfileNavItem path="/profile" text="Profile" />
      <ProfileNavItem path="/profile/files" text="Files" />
      <ProfileNavItem path="/profile/statistics" text="Statistics" />
      <ProfileNavItem path="/profile/subscription" text="Subscription" />
      <ProfileNavItem path="/profile/settings" text="Settings" />
      <Link
        h="15%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{ textDecoration: "none", opacity: 0.6 }}
        href="/"
        color="#ff3f3f"
        onClick={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("userId");
          localStorage.removeItem("password");
        }}
      >
        Logout
      </Link>
    </Flex>
  );
};
