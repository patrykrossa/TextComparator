import { Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Files = () => {
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
    <Flex
      p="50px 60px"
      fontSize="30px"
      fontWeight="600"
      flexDirection="column"
      gap="20px"
      w="72vw"
      h="100%"
      overflow="auto"
    >
      Your files
      <Flex flexDirection="column" gap="10px" w="100%">
        {files.map((file: any) => (
          <Flex
            w="100%"
            p="10px"
            bgColor="#303030"
            borderRadius="15px"
            justifyContent="space-between"
            fontSize="18px"
          >
            <Text>{file.name}</Text>
            <Text>{file.size}B</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
