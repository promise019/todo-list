export function cryptoUID() {
    let randomNo = Math.floor(Math.random() * 100);
    let timeStamp = new Date();
    let string = "0xXXYYZZFGHGFXXCCxyMxyy"
    let val = randomNo + timeStamp.getDate() * randomNo;
    let uuid = string.replace(/xy/gi, val)
    
    //console.log(uuid)

    return uuid
}

cryptoUID();