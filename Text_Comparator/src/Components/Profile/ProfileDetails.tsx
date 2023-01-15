import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const ProfileDetails = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userId");
    axios
      .get(`https://localhost:44307/outputFiles/`, {
        params: { userId: userID },
      })
      .then((res: any) => {
        setFiles(res.data);
      });
  }, []);

  return (
    <Flex>
      <Flex
        h="30%"
        w="72vw"
        bg="linear-gradient(83.8deg, #1EC5A9 -4.57%, #3D70C9 120.28%);"
        borderTopRadius="15px"
        position="relative"
      >
        <Flex
          position="absolute"
          borderRadius="50%"
          width="180px"
          height="180px"
          bg="#8697EE"
          fontSize="50px"
          justifyContent="center"
          alignItems="center"
          bottom="-90px"
          left="calc(36vw - 90px)"
        >
          {localStorage.getItem("user")?.at(0)?.toUpperCase()}
        </Flex>
        <Flex
          marginTop="25%"
          w="72vw"
          h="100%"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="column"
          fontSize="25px"
        >
          <Text fontSize="30px">{localStorage.getItem("user")}</Text>
          <Flex flexDirection="column" w="100%" px="60px">
            <Text>Last added files</Text>
            <Flex gap="10px" overflow="auto">
              {files.length > 0 ? (
                files.slice(-5).map((file: any) => (
                  <Flex
                    h="150px"
                    w="150px"
                    bgColor="#303030"
                    borderRadius="15px"
                    p="10px"
                    flexDirection="column"
                  >
                    <Text>{file.name}</Text>
                    <Text fontSize="18px">{file.size}B</Text>
                  </Flex>
                ))
              ) : (
                <Text fontSize="18px" color="rgba(255,255,255,0.7)">
                  No files yet
                </Text>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
