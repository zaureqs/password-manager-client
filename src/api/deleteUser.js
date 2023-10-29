"use server";
import axios from "axios";
import { cookies } from "next/headers";

const deleteUser = async (token) => {
  try {
    const token = cookies().get("token");
    if (!token) {
      return { success: false };
    } else {
      const response = await axios.post(
        process.env.BACKEND_URL + "/user/deleteuser",
        { token: token.value }
      );
      cookies().delete("token");
      if (response.data.success) {
        return response.data;
      } else {
        return { success: false };
      }
    }
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export default deleteUser;
