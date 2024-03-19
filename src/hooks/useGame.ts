import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}
const useGame = (gamequery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gamequery.genre?.id,
        platforms: gamequery.platform?.id,
        ordering: gamequery.SortOrder,
        search: gamequery.searchText,
      },
    },
    [gamequery]
  );
export default useGame;
