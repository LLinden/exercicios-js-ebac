function mdc(num1, num2) {

    let sobra

    while (sobra != 0) {
        sobra = num1 % num2;

        num1 = num2;
        num2 = sobra;
    }
    return num1
}

console.log(mdc(20,24))