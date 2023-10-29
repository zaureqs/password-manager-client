'use client';

import CryptoJS from "crypto-js";
import Cookies from 'js-cookie';

const decrypt = (secrets) => {

    const secretKey = Cookies.get('secratekey');

    secrets.forEach((secret) => {
        const decryptedString = CryptoJS.AES.decrypt(secret.password, secretKey || 'YOUR_SECRET_KEY', {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
          });

        secret.password = decryptedString.toString(CryptoJS.enc.Utf8);
    });

    return secrets;
}

export default decrypt;