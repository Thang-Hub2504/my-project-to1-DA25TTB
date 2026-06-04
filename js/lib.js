/*Viết mã Javascript*/
function printBCC(num)
{
    let result = "";

    let i = 1;
    while(i<=10)
    {
        result += `${num} x ${i} = ${num*i} <br>`; 
        i++;
    }
    
    //Đưa kết quả vào thẻ div có id là "result"
    document.getElementById("result").innerHTML = result;

}























