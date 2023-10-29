'use server';
import axios from 'axios';
import { cookies } from 'next/headers';

const isLogedIn = async () => {
  try {
    const token = cookies().get('token');
    if(!token)
    {
      return {success: false};
    }
    else{
      const response = await axios.post(process.env.BACKEND_URL + '/user/logedin', {"token":token.value});

      if(response.data.success){
        return response.data;
      }else{
        return {success: false};
      }
    }
  } catch (error) {
    console.log(error);
    return {success: false};
  }
};

export default isLogedIn;