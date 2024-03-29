import { Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const SubCard = ({
  color,
  textColor,
  colorGradient,
  price,
  space,
  dbSpace,
}: {
  color: string;
  textColor: string;
  colorGradient: string;
  price: number;
  space: string;
  dbSpace: string;
}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userID = localStorage.getItem("userId");
    axios.get(`https://localhost:44307/users/${userID}`).then((res: any) => {
      console.log(res.data.goldenPacket);
      console.log(res.data.diamondPacket);
      setUser(res.data);
    });
  }, []);

  const handleSubscription = async () => {
    if (color === "GOLD") {
      const data = {
        ...user,
        password: localStorage.getItem("password"),
        goldenPacket: !(user as any).goldenPacket,
      };
      await axios
        .put(`https://localhost:44307/users/${(user as any).id}`, data)
        .then((res: any) => {
          (window as any).location.reload();
        });
    } else if (color === "DIAMOND") {
      const data = {
        ...user,
        password: localStorage.getItem("password"),
        diamondPacket: !(user as any).diamondPacket,
      };
      await axios
        .put(`https://localhost:44307/users/${(user as any).id}`, data)
        .then((res: any) => {
          (window as any).location.reload();
        });
    }
  };

  return (
    <Flex
      h="90%"
      w="35%"
      bg="#252525"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="25px"
      position="relative"
      pb="30px"
    >
      <Flex
        position="absolute"
        top="0"
        left="0"
        bg={colorGradient}
        h="80px"
        w="100%"
        borderTopRadius="25px"
        justifyContent="center"
        alignItems="center"
        fontSize="40px"
        fontWeight="700"
      >
        {color}
      </Flex>
      <Flex
        marginTop="150px"
        flexDirection="column"
        justifyContent="space-between"
        px="80px"
      >
        <Flex flexDirection="column" fontSize="20px">
          <ul>
            <li>
              <Text>Available space: {space}</Text>
            </li>
            <li>
              <Text>Additional database space: {dbSpace}</Text>
            </li>
          </ul>
        </Flex>
        <Flex flexDirection="column" gap="50px">
          <Flex flexDirection="column">
            <Text
              w="100%"
              textAlign="end"
              color={textColor}
              fontSize="50px"
              fontWeight="700"
              lineHeight="80%"
            >
              {price}$
            </Text>
            <Text
              w="100%"
              textAlign="end"
              color="rgba(255,255,255,0.7)"
              fontSize="17px"
            >
              per month
            </Text>
          </Flex>
          <Button
            bg="none"
            border={`2px solid ${textColor}`}
            p="25px"
            fontSize="25px"
            fontWeight="700"
            borderRadius="15px"
            _hover={{ bg: colorGradient }}
            onClick={handleSubscription}
          >
            {color === "GOLD"
              ? (user as any).goldenPacket
                ? "Unsubscribe"
                : "Subscribe"
              : (user as any).diamondPacket
              ? "Unsubscribe"
              : "Subscribe"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
