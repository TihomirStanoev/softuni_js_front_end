function chekArr(arr) {
    function isPalindrome(number) {
        const numberString = String(number);
        let numberLength = numberString.length - 1;

        for (let i = 0; i <= numberLength / 2; i++) {
            const a = Number(numberString[i]);
            const b = Number(numberString[numberLength - i])
            if (a !== b) {
                return false;
            }
        }
        return true;
    }

    for (let n of arr) {
        console.log(isPalindrome(n));
    }
}

