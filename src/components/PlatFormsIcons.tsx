import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";
import { IconType } from "react-icons/lib";

interface Props {
  IconName: string;
}
export const PlatFormsIcons = ({ IconName }: Props) => {
  const PlatForm: Record<string, IconType> = {
    android: FaAndroid,
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: IoIosPhonePortrait,
    web: BsGlobe,
  };

  return <Icon as={PlatForm[IconName]} color={"gray"}></Icon>;
};
