import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  HStack,
  Kbd,
  Badge,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import { PlatFormsIcons } from "./PlatFormsIcons";
import GetCroppedImage from "../services/GetCroppedImage";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <div>
      <Card borderRadius={10} overflow={"hidden"} size="md">
        <CardBody>
          <Image
            src={GetCroppedImage(game.background_image)}
            alt="Game image"
            borderRadius="10%"
          />
          <HStack justifyContent={"space-between"} color={"green"} mb={3}>
            <HStack>
              {game.parent_platforms.map(({ platform }) => (
                <PlatFormsIcons key={platform.id} IconName={platform.slug} />
              ))}{" "}
            </HStack>
            <Badge
              colorScheme="green"
              fontSize={"14px"}
              padding={2}
              borderRadius={"20%"}
            >
              {game.metacritic}
            </Badge>
          </HStack>
          <Heading fontSize="2xl">{game.name}<Emoji rating={game.rating_top}></Emoji></Heading>
        </CardBody>
      </Card>
    </div>
  );
};
