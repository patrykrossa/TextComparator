import { Flex } from "@chakra-ui/react";
import React from "react";
import { FileContainter, primaryColor } from "./fileContainter";
import { colors } from "../../config";
import { AddFile } from "./addFile";
// import { ProgressBar } from "./progressBar";

export const CompareSection = () => {
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      alignItems="center"
      mt="40px"
      px="60px"
    >
      <FileContainter
        bgColor={colors.PANEL_BG_DARK}
        primaryColor={primaryColor.GREEN}
      >
        <AddFile color={colors.SECONDARY} />
        {/* LOADING STATE */}
        {/* <ProgressBar value={87} color={colors.SECONDARY} /> */}
      </FileContainter>
      <FileContainter
        bgColor={colors.PANEL_BG_DARK}
        primaryColor={primaryColor.BLUE}
      >
        <AddFile color={colors.PRIMARY} />
        {/* LOADING STATE */}
        {/* <ProgressBar value={64} color={colors.PRIMARY} /> */}
      </FileContainter>
    </Flex>
  );
};
