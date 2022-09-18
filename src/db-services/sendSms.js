import axios from "axios";

import { apiConstants } from "../utils/apiConstants";

export const sendSms = async (data) => {
  try {
    const res = await axios.post(apiConstants.SEND_SMS, data);
    return res;
  } catch (err) {
    throw err;
  }
};
