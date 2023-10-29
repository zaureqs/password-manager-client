"use server";
import { cookies } from 'next/headers'

const removeCookie = () => {
    cookies().delete('token');
    cookies().delete('secratekey');
};

const logOut = () => {
    try {
        removeCookie();
    } catch (error) {
        console.log(error);
    }
}

export default logOut;