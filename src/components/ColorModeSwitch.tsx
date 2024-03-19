import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace={"nowrap"}>{colorMode.toUpperCase()} MODE </Text>
      </HStack>
    </>
  );
};
