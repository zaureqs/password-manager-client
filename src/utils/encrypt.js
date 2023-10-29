"use client";

import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const encrypt = (secret) => {
    const secretKey = Cookies.get('secratekey');

  const encryptedString = CryptoJS.AES.encrypt(secret.password, secretKey, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return {...secret,password:encryptedString.toString()}; // Return the encrypted string
}

export default encrypt;
