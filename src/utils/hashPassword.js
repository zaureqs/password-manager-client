'use client';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

const hashPassword = (password) => {
    
    const hashedText = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    const options = {
        expires: new Date(
                Date.now() + 3*24 * 60 * 60 *1000,
            ),
        path : "/"
      }
      
    Cookies.set('secratekey',hashedText+hashedText+hashedText,options);

    const hashedPass = CryptoJS.SHA256(hashedText).toString(CryptoJS.enc.Hex);

    return hashedPass;
}


export default hashPassword;