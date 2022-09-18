import axios from "axios";

import { apiConstants } from "../utils/apiConstants";

export const getUserById = async (userId) => {
  try {
    const res = await axios.get(`${apiConstants.GET_USER_BY_ID}${userId}`);
    return res;
  } catch (err) {
    throw err;
  }
};
