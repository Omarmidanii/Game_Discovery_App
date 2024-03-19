import { Box, Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { PlatFromSelcetor } from "./components/PlatFromSelcetor";
import { Platform } from "./hooks/useGame";
import { SortSelector } from "./components/SortSelector";
import { GameHeading } from "./components/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  SortOrder: string;
  searchText: string;
}
function App() {
  const [gamequery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <Grid
        templateAreas={{
          sm: `"nav"
                "main"`,
          md: `"nav nav"
                "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gamequery, searchText })
            }
          ></NavBar>
        </GridItem>
        <Show above="md">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              Filter={(type) => setGameQuery({ ...gamequery, genre: type })}
            ></GenresList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
          <GameHeading gamequery={gamequery}/>
          <HStack spacing={5}  marginBottom={5}>
            <PlatFromSelcetor
              SelectedPlatform={gamequery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gamequery, platform: platform })
              }
            ></PlatFromSelcetor>
            <SortSelector
              onSelectSortOrder={(SortOrder) =>
                setGameQuery({ ...gamequery, SortOrder })
              }
              SortOrder={gamequery.SortOrder}
            ></SortSelector>
          </HStack>
          </Box>
          <GameGrid gamequery={gamequery}></GameGrid>{" "}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
