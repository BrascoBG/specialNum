function specialNum(n){
    let number = Number(n);
    let numPrint = "";

    for(let i = 1111; i <= 9999; i++){
        let a = Math.trunc(i % 10 / 1);
        let b = Math.trunc(i % 100 / 10);
        let c = Math.trunc(i % 1000 / 100);
        let d = Math.trunc(i % 10000 / 1000);

        if(number % a == 0 && number % b == 0 && number % c == 0 && number % d == 0){
            numPrint += i + " ";
        }
    }
    console.log(numPrint);
}
specialNum(3);