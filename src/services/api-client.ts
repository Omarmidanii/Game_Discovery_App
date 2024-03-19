import axios from "axios";
export default axios.create({
baseURL:"https://api.rawg.io/api",
params:{
key:"9be185b7a7d3425eae5dd7bedfb23bdf"
}
})
