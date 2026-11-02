function login(loginArr) {
    const username = loginArr[0];
    const password = [...username].reverse().join("");
    const maxTries = 4;


    for (let i = 1; i < loginArr.length; i++) {
        if (password === loginArr[i]) {
            console.log(`User ${username} logged in.`);
            break;
        }
        if (i >= maxTries) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log('Incorrect password. Try again.');
    }
}

