"use server";
import axios from "axios";

const emailVerify = async (data) => {

    console.log(data);
  try {
    const response = await axios.post(
      process.env.BACKEND_URL + "/user/verifyemail",
      { data: data }
    );
    console.log(response.data);

    if (response.data.success) {
      return response.data;
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log(error.message);
    return { success: false };
  }
};

export default emailVerify;
