function passwordValidator(password) {
    function isAlphaNumeric(password) {
        return /^[a-zA-Z0-9]+$/.test(password);
    }

    function isCorrectLength(password, maxLength, minLength) {
        return password.length >= minLength && password.length <= maxLength;
    }

    function hasAtLeastTwoDigits(password, digits) {
        return (password.match(/\d/g) || []).length >= digits;
    }

    let errors = [];
    const maxLength = 10;
    const minLength = 6;
    const digits = 2;

    if (!isCorrectLength(password, maxLength, minLength)) {
        errors.push(`Password must be between ${minLength} and ${maxLength} characters`);
    }
    if (!isAlphaNumeric(password)) {
        errors.push('Password must consist only of letters and digits');
    }
    if (!hasAtLeastTwoDigits(password, digits)) {
        errors.push(`Password must have at least ${digits} digits`);
    }

    if (errors.length === 0) {
        errors.push('Password is valid');
    }

    return errors.join('\n')
}

