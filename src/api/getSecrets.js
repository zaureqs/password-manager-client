'use server';
import axios from 'axios';
import { cookies } from 'next/headers';

const getSecrets = async (token) => {
  
  try {
    const token = cookies().get('token');
    if(!token)
    {
      return {success: false};
    }
    else{
      const response = await axios.post(process.env.BACKEND_URL + '/secret/getsecrets', {"token":token.value});

      if(response.data.success)
      {
        return response.data;
      }

      return {
        success: false,
        message: "tere is error while getting data !"
      };
      
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "there is an Internal server error !"
    };
  }
};

export default getSecrets;