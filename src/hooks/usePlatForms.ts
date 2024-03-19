import useData from "./useData";
import { Platform } from "./useGame";

const usePlatForm = () => useData<Platform>("/platforms/lists/parents");
export default usePlatForm;
