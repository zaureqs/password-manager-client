"use server";
import axios from "axios";
import { cookies } from "next/headers";

const updateSecret = async (secret) => {
  try {
    const token = cookies().get("token");
    if (!token) {
      return { success: false };
    } else {
        const response = await axios.post(
          process.env.BACKEND_URL + "/secret/updatesecrets",
          { token: token.value, data: secret}
        );

      if (response.data.success) {
        return response.data;
      }

      return { success: false };
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export default updateSecret;
