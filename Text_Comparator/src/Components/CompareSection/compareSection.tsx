import { Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FileContainter, primaryColor } from "./fileContainter";
import { colors } from "../../config";
import { AddFile } from "./addFile";
import { ProgressBar } from "./progressBar";
import { CompareFile } from "./compareFile";

enum StateOptions {
  UPLOAD,
  LOADING,
  COMPARING,
}

export const CompareSection = () => {
  const [file1, setFile1] = useState(null);
  const [text1, setText1] = useState("");
  const [file2, setFile2] = useState(null);
  const [text2, setText2] = useState("");
  const [state1, setState1] = useState(StateOptions.UPLOAD);
  const [state2, setState2] = useState(StateOptions.UPLOAD);
  const handleChangeFirst = (file: any, num: number) => {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      setFile1(evt.target.result);
    };
    reader.readAsText(file);
    setState1(StateOptions.LOADING);
    setTimeout(() => {
      setState1(StateOptions.COMPARING);
    }, 1000);
  };

  const handleChangeSecond = (file: any) => {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      setFile2(evt.target.result);
    };
    reader.readAsText(file);
    setState2(StateOptions.LOADING);
    setTimeout(() => {
      setState2(StateOptions.COMPARING);
    }, 1000);
  };

  const onDrop = (file: any) => {
    console.log(file);
  };

  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      alignItems="center"
      mt="40px"
      px="60px"
    >
      {/* {state1 !== StateOptions.COMPARING && state2 !== StateOptions.COMPARING && 
      } */}
      {state1 === StateOptions.COMPARING &&
      state2 === StateOptions.COMPARING ? (
        <CompareFile
          file={file1}
          primaryColor={colors.PRIMARY}
          bgColor={colors.PANEL_BG_DARK}
        />
      ) : (
        <FileContainter
          bgColor={colors.PANEL_BG_DARK}
          primaryColor={primaryColor.GREEN}
        >
          {state1 === StateOptions.UPLOAD && (
            <AddFile
              color={colors.SECONDARY}
              handleChange={handleChangeFirst}
              onDrop={onDrop}
            />
          )}
          {state1 === StateOptions.LOADING && (
            <ProgressBar value={87} color={colors.SECONDARY} />
          )}
        </FileContainter>
      )}

      {state1 === StateOptions.COMPARING &&
      state2 === StateOptions.COMPARING ? (
        <CompareFile
          file={file2}
          primaryColor={colors.SECONDARY}
          bgColor={colors.PANEL_BG_DARK}
        />
      ) : (
        <FileContainter
          bgColor={colors.PANEL_BG_DARK}
          primaryColor={primaryColor.BLUE}
        >
          {state2 === StateOptions.UPLOAD && (
            <AddFile
              color={colors.PRIMARY}
              handleChange={handleChangeSecond}
              onDrop={onDrop}
            />
          )}
          {state2 === StateOptions.LOADING && (
            <ProgressBar value={64} color={colors.PRIMARY} />
          )}
        </FileContainter>
      )}
    </Flex>
  );
};
