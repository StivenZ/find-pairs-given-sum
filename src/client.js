import Axios from "axios";

export default async function fetchData(apiLink) {
  try {
    const response = await Axios.get(apiLink);
    return response.data["values"];
  } catch (error) {
    console.log(error);
  }
}
