function printBCC(num) {
    let result = "";
    let i = 1;
    while (i <= 10) {
        result += `${num} x ${i} = ${num * i} <br>`;
        i++;
    }
    document.getElementById("result").innerHTML = result;
}
