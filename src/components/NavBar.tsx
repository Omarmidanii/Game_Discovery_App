import { HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.jfif";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
export const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding={"10px"} mb={5}>
        <Image
          src={logo}
          boxSize="80px"
          borderRadius="50%"
          objectFit={"cover"}
        ></Image>
        <SearchInput onSearch={(searchText) => onSearch(searchText)} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};
