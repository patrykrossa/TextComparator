import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FileContainter, primaryColor } from "./fileContainter";
import { colors } from "../../config";
import { AddFile } from "./addFile";
import { ProgressBar } from "./progressBar";
import { CompareFile } from "./compareFile";
import axios from "axios";
import { Nav } from "./nav";

enum StateOptions {
  UPLOAD,
  LOADING,
  READY_TO_COMPARE,
  COMPARING,
}

export type Difference = {
  startIndex: number;
  endIndex: number;
  length: number;
};

export const CompareSection = () => {
  const [differences, setDifferences] = useState<Difference[]>([]);
  const [file1, setFile1] = useState(null);
  const [text1, setText1] = useState("");
  const [file2, setFile2] = useState(null);
  const [text2, setText2] = useState("");
  const [state1, setState1] = useState(StateOptions.UPLOAD);
  const [state2, setState2] = useState(StateOptions.UPLOAD);
  const handleChangeFirst = (file: any, num: number) => {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      setText1(evt.target.result);
    };
    setFile1(file);
    reader.readAsText(file);
    setState1(StateOptions.LOADING);
    setTimeout(() => {
      setState1(StateOptions.READY_TO_COMPARE);
    }, 1000);
  };

  const handleChangeSecond = (file: any) => {
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      setText2(evt.target.result);
    };
    setFile2(file);
    reader.readAsText(file);
    setState2(StateOptions.LOADING);
    setTimeout(() => {
      setState2(StateOptions.READY_TO_COMPARE);
    }, 1000);
  };

  const upload = () => {
    var bodyFormData = new FormData();
    bodyFormData.append("value", file1!);
    bodyFormData.append("value", file2!);

    axios({
      method: "post",
      url: "https://localhost:44307/comparator",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response: any) {
        //handle success
        setState1(StateOptions.COMPARING);
        setState2(StateOptions.COMPARING);
        console.log(response.request.response);
        const diff = JSON.parse(response.request.response);
        const arr: any[] = [];
        diff.forEach((element: any) => {
          arr.push(element);
        });
        setDifferences(diff);
      })
      .catch(function (response: any) {
        //handle error
        console.log(response);
      });
  };

  useEffect(() => {
    if (
      state1 === StateOptions.READY_TO_COMPARE &&
      state2 === StateOptions.READY_TO_COMPARE
    ) {
      upload();
    }
  }, [state1, state2]);

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
      {state1 === StateOptions.COMPARING &&
      state2 === StateOptions.COMPARING ? (
        <Flex justifyContent="space-between" w="100%">
          <CompareFile
            file={text1}
            primaryColor={colors.PRIMARY}
            bgColor={colors.PANEL_BG_DARK}
            differences={differences}
          />
          <Flex
            flexDirection="column"
            justifyContent="center"
            w="20%"
            alignItems="center"
            position="relative"
          >
            <Nav />
            <Flex
              justifySelf="flex-end"
              flexDirection="column"
              w="80%"
              gridGap="10px"
              position="absolute"
              bottom="0"
            >
              <Button
                dropShadow="0 4 4 0"
                bgColor="transparent"
                color="white"
                border="1px solid blue"
              >
                PREVIEW
              </Button>
              <Button>GENERATE</Button>
            </Flex>
          </Flex>
          <CompareFile
            file={text2}
            primaryColor={colors.SECONDARY}
            bgColor={colors.PANEL_BG_DARK}
            differences={differences}
          />
        </Flex>
      ) : (
        <>
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
        </>
      )}
    </Flex>
  );
};
