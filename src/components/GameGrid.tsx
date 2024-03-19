import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
interface Props {
  gamequery: GameQuery;
}
export const GameGrid = ({ gamequery }: Props) => {
  const { data, err, isLoading } = useGame(gamequery);
  if (err) return <Text>{err} </Text>;
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid spacing={6} columns={{ sm: 2, md: 3, lg: 4 }} padding={"10px"}>
      {isLoading &&
        skeleton.map((s) => <GameCardSkeleton key={s}></GameCardSkeleton>)}
      {data.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};
