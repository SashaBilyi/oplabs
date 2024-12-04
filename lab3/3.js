function ipToNumber(ip = '127.0.0.1') {
    const bytes = ip.split('.').map(Number); 
    let result = 0;

    for (let i = 0; i < bytes.length; i++) {
        result += bytes[i] << ((3 - i) * 8); 
    }

    return result;
}


console.log(ipToNumber('127.0.0.1'));