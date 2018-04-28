var undefinded;
function decimalNum(bNum,cNum){
    var num1 = bNum,
        num2 = cNum;
    var bNLen = 0, cNLen = 0,z=1;
    if(bNum != parseInt(bNum) && !isNaN(bNum)){
        bNLen = (bNum.toString().replace(parseInt(bNum)+".","")).length;
        num1 = bNum.toString().replace(".","");
    }
    if(cNum != parseInt(cNum) && !isNaN(cNum)){
        cNLen = (cNum.toString().replace(parseInt(cNum)+".","")).length;
        num2 = cNum.toString().replace(".","");
    }
    if(bNLen > 0  || cNLen > 0){
        var xiaoshuW = bNLen+cNLen;
        z = "1";
        for(var i = 0 ; i<xiaoshuW; i++){
            z = z+"0";
        }
    }
    return (Number(num1)*Number(num2))/Number(z);
};
