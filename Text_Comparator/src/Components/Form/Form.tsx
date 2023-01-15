import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { colors } from "../../config";

export const Form = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  const [register, setRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSignUp = async () => {
    const data = { username: username, password: password, email: email };
    await axios
      .post("https://localhost:44307/users/register", data)
      .then(() => setResponse("You can sign in now!"))
      .catch((e: any) => setResponse("Invalid data, try again!"));
  };
  const handleSignIn = async () => {
    const data = { username: username, password: password };
    await axios
      .post("https://localhost:44307/users/login", data)
      .then((res: any) => {
        console.log(res.data.username);

        localStorage.setItem("user", res.data.username);
        localStorage.setItem("userId", res.data.id);
        setIsOpen(false);
      })
      .catch((e: any) => setResponse("Invalid data, try again!"));
  };

  return (
    <Flex
      height="100vh"
      width="100vw"
      bgColor="rgba(0, 0, 0, 0.6)"
      alignItems="center"
      justifyContent="center"
      zIndex="10000"
      position="absolute"
      top="0"
      left="-3vw"
      onClick={(e: any) => {}}
    >
      <Flex
        height="80%"
        width="40%"
        backgroundColor="#252525"
        borderRadius="25px"
        flexDirection="column"
        alignItems="center"
        p="150px 104px"
        position="relative"
        gap="50px"
        onClick={() => {}}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          backgroundColor="#151515"
          p="26px"
          width="100%"
          position="absolute"
          top="0"
          borderTopRadius="25px"
          fontSize="25px"
          fontWeight="700"
        >
          <Flex
            position="absolute"
            top="25px"
            right="30px"
            cursor="pointer"
            onClick={() => setIsOpen(false)}
          >
            <Text>X</Text>
          </Flex>
          {register ? "Sign up" : "Sign in"}
          <Box
            height="3px"
            width="100%"
            background="linear-gradient(90deg, #5661B1 0%, #1EC5A9 100%);"
            position="absolute"
            bottom="-1px"
          />
        </Flex>

        <Flex gap="30px" flexDir="column" width="100%" fontSize="25px">
          <Text
            color={response === "You can sign in now!" ? "green" : "red"}
            fontSize="15px"
          >
            {response}
          </Text>
          <Flex flexDir="column">
            Login
            <Input
              bgColor="white"
              color="black"
              onChange={(e: any) => {
                setUsername(e.target.value);
              }}
            />
          </Flex>
          <Flex flexDir="column">
            Password
            <Input
              bgColor="white"
              color="black"
              type="password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </Flex>
          {register && (
            <Flex flexDir="column">
              Email
              <Input
                bgColor="white"
                color="black"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
            </Flex>
          )}
        </Flex>
        <Flex flexDir="column" fontSize="25px" alignItems="center" gap="15px">
          <Button
            bg="linear-gradient(87.35deg, #1EC5A9 3.62%, #5661B1 106.65%, #D9D9D9 106.65%);"
            p="20px"
            fontWeight="700"
            _hover={{ opacity: 0.7 }}
            width="80%"
            onClick={register ? handleSignUp : handleSignIn}
          >
            {register ? "Create account" : "Log in"}
          </Button>
          <Flex fontWeight="700" gap="10px">
            {register ? "Already have an account?" : "Don't have an account?"}
            <Text
              color={colors.SECONDARY2}
              cursor="pointer"
              _hover={{ color: colors.SECONDARY }}
              onClick={() => setRegister((prev) => !prev)}
            >
              {register ? "Sign in" : "Create one!"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
