'use server';
import axios from "axios";
import { cookies } from 'next/headers';

const signUp = async (user) => {
  try {
    const response = await axios.post(process.env.BACKEND_URL + "/user/signup",{"name": user.name,
    "email": user.email,
    "password": user.password});

    const options = {
      expires: new Date(
              Date.now() + 3*24 * 60 * 60 *1000,
          ),
          httpOnly: true,
    }
    

    if(response.data.success){
      cookies().set('token',response.data.token,options);
    }

    response.data.token = undefined;

    return response.data;
  } catch (error) {
      console.error(error.message);
      return {
        success: false,
        message: "Internal Server Error"
      };
    }
};

export default signUp;
