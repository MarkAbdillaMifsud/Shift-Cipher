class ShiftCipher {
    constructor(shiftNum) {
        this._shiftNum = shiftNum;
    }

    encrypt(message) {
        message = message.toUpperCase();
        let solved = '';
        for (let i = 0; i < message.length; i++) {
            let codeNum = message[i].charCodeAt();
            if (codeNum >= 65 && codeNum <= 90) {
                solved += String.fromCharCode(((codeNum - 65 + this._shiftNum) % 26) + 65);
            } else {
                solved += String.fromCharCode(codeNum);
            }
        }
        return solved;
    }

    decrypt(encryptedMessage) {
        encryptedMessage = encryptedMessage.toUpperCase();
        let solved = '';
        for (let i = 0; i < encryptedMessage.length; i++) {
            let codeNum = encryptedMessage[i].charCodeAt();
            if (codeNum >= 65 && codeNum <= 90) {
                solved += String.fromCharCode(90 - ((90 - codeNum + this._shiftNum) % 26));
            } else {
                solved += String.fromCharCode(codeNum);
            }
        }
        return solved.toLowerCase();
    }
}

const cipher = new ShiftCipher(2); // shift message by 2 characters
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K NQXG VQ EQFG!')); // returns 'I love to code!'
console.log(cipher.encrypt('Z')); // returns 'B'
console.log(cipher.decrypt('A')); // returns 'Y'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'