import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../config";
import { AddFileIcon } from "../../Icons/addFileIcon";
import { FileUploader } from "react-drag-drop-files";
import { UploadIcon } from "../../Icons/uploadIcon";

export const AddFile = ({ color, handleChange, onDrop }: { color: string, handleChange: any, onDrop: any }) => {
  const fileTypes = ["txt", "pdf", "doc", "docx"];

  const [icon, setIcon] = useState(<AddFileIcon color={color} />)
  const [text, setText] = useState("ADD YOUR FILE")
  

  const handleDrag = (dragging: any) => {
    if(dragging) 
    {
      setText("DROP HERE"); 
      setIcon(<UploadIcon color={color}/>)
    } else 
    {
      setText("ADD YOUR FILE"); 
      setIcon(<AddFileIcon color={color}/>)
    }
  }

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} hoverTitle=" " onDraggingStateChange={handleDrag} onDrop={onDrop} >
    <Flex flexDirection="column" w="70vh" h="80vh" justifyContent="center" alignItems="center" borderRadius="20px">
        {icon}
        <Text
          color={color === colors.PRIMARY ? colors.PRIMARY2 : colors.SECONDARY2}
          fontWeight="600"
          fontSize="30px"
          cursor="pointer"
        >
          {text}
        </Text>
    </Flex>
    </FileUploader>
  );
};
