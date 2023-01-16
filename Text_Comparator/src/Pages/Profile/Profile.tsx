import { Flex } from "@chakra-ui/react";
import React from "react";
import { ProfileNav } from "../../Components/Profile/ProfileNav/ProfileNav";
import { Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <Flex
      color="white"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="90vw"
      gap="40px"
    >
      <ProfileNav />
      <Flex w="80%" h="80%" bg="#1e1e1e" borderRadius="15px">
        <Outlet />
      </Flex>
    </Flex>
  );
};
