import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCroppedImage from "../services/GetCroppedImage";
import { useState } from "react";

interface Props {
  Filter: (type: Genre | null) => void;
}
export const GenresList = ({ Filter }: Props) => {
  const { data, err, isLoading } = useGenres();
  const [SelectedGenre, setSelectedGenre] = useState("");
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      <Heading mb={3} fontSize={"2xl"}>
        Geners
      </Heading>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"}
              src={GetCroppedImage(g.image_background)}
            ></Image>
            <Button
              onClick={() => {
                Filter(g);
                setSelectedGenre(g.name);
              }}
              fontWeight={g.name === SelectedGenre ? "bold" : "normal"}
              fontSize={"large"}
              variant={"link"}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
