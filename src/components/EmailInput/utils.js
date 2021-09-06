export const addEmailToList = (emails, email) => {
    const newEmail = {
        email: email,
        isValid: checkIsValidEmail(email)
    }
    const updatedEmail = [...emails, newEmail]
    return updatedEmail
}

export const checkIsValidEmail = (email) => {
    let isValidEmail = false
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        isValidEmail = true
    }
    return isValidEmail
}

export const removeEmailByIndex = (emails, index) => {
    if (index > -1) {
        const emailList = [...emails]
        emailList.splice(index, 1)
        return emailList
    } else {
        return emails
    }
}

export const createRandomEmail = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let string = '';
    for(let i=0; i<10; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return string + "@gmail.com"
}

export const getValidEmailCount = (emails) => {
    const validEmails = [...emails].filter(item => item.isValid)
    if (validEmails.length > 0) {
        return validEmails.length
    }
    return "0"
}