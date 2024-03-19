import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
interface Props {
  gamequery: GameQuery;
}
export const GameHeading = ({ gamequery }: Props) => {
  const heading = `${gamequery.platform?.name || ""} ${
    gamequery.genre?.name || ""
  } Game`;
  return (
    <Heading as={"h1"} mb={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};
