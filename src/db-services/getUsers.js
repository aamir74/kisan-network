import axios from "axios";

import { apiConstants } from "../utils/apiConstants";

export const getUsers = async () => {
  try {
    const res = await axios.get(apiConstants.GET_ALL_USERS);
    return res;
  } catch (err) {
    throw err;
  }
};
