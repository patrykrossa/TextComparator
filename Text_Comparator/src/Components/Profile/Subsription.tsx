import { Flex } from "@chakra-ui/react";
import React from "react";
import { SubCard } from "./SubCard";

export const Subsription = () => {
  return (
    <Flex w="72vw" h="100%" justifyContent="space-around" alignItems="center">
      <SubCard
        color="GOLD"
        colorGradient="linear-gradient(88.69deg, #866A2A -7.75%, #FFC811 110.13%)"
        textColor="#FFC811"
        space="5GB"
        dbSpace="100GB"
        price={3}
      />
      <SubCard
        color="DIAMOND"
        colorGradient="linear-gradient(88.52deg, #390D6F -4.06%, #51408D 53.05%)"
        textColor="#8A79C8"
        space="10GB"
        dbSpace="1TB"
        price={5}
      />
    </Flex>
  );
};
