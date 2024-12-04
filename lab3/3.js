function ipToNumber(ip = '127.0.0.1') {
    return ip
        .split('.') 
        .map(Number) 
        .reduce((result, byte, index) => 
            result + (byte << ((3 - index) * 8)), 0); 
}


console.log(ipToNumber('127.0.0.1'));