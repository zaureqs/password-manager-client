"use server";
import axios from "axios";
import { cookies } from "next/headers";

const deleteSecrate = async (secret) => {
    console.log(secret);
  try {
    const token = cookies().get("token");
    if (!token) {
      return { success: false };
    } else {
      const response = await axios.post(
        process.env.BACKEND_URL + "/secret/deletesecret",
        { token: token.value, data: secret}
      );

      if (response.data.success) {
        return response.data;
      }

      return { success: false };
    }
  } catch (error) {
    return error;
  }
};

export default deleteSecrate;
