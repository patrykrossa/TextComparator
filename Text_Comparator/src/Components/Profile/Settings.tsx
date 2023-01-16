import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const Settings = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const userID = localStorage.getItem("userId");
    axios.get(`https://localhost:44307/users/${userID}`).then((res: any) => {
      setUser(res.data);
      setUsername(res.data.username);
      setPassword(res.data.password);
      setEmail(res.data.email);
    });
  }, []);

  const handleChangeData = async () => {
    const data = {
      ...user,
      username: username,
      password: password,
      email: email,
    };
    await axios
      .put(`https://localhost:44307/users/${(user as any).id}`, data)
      .then((res: any) => {
        (window as any).location.reload();
      });
  };

  return (
    <Flex
      gap="30px"
      flexDir="column"
      width="100%"
      fontSize="25px"
      p="50px 60px"
      w="72vw"
    >
      <Text fontSize="30px" fontWeight="600">
        Change your login data
      </Text>
      <Flex flexDir="column" w="50%">
        Email: {(user as any)?.email}
        <Input
          bgColor="white"
          color="black"
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
      </Flex>
      <Flex flexDir="column" w="50%">
        Login: {(user as any)?.username}
        <Input
          bgColor="white"
          color="black"
          onChange={(e: any) => {
            setUsername(e.target.value);
          }}
        />
      </Flex>
      <Flex flexDir="column" w="50%">
        Password: {"*".repeat(localStorage.getItem("password")?.length!)}
        <Input
          bgColor="white"
          color="black"
          type="password"
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
      </Flex>
      <Button
        bg="linear-gradient(87.35deg, #1EC5A9 3.62%, #5661B1 106.65%, #D9D9D9 106.65%);"
        p="20px"
        marginTop="50px"
        fontWeight="700"
        _hover={{ opacity: 0.7 }}
        width="30%"
        onClick={handleChangeData}
      >
        Change login data
      </Button>
    </Flex>
  );
};
