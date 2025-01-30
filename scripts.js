function getSeason() {
    let userinpit = Number(prompt('Input number'))
    let digitsWinter = [12, 1, 2]
    let digitsSpring = [3,4,5]
    let digitsSummer = [6,7,8]
    let digitsAutmum = [9,10, 11]
    if (digitsWinter.includes(userinpit)) {
        alert('winter')
    }
    else if (digitsSpring.includes(userinpit)) {
        alert('autum')
    }
    else if (digitsSummer.includes(userinpit)) {
        alert('summer')
    } else if (digitsAutmum.includes(userinpit)) {
        alert('autum')
    } else {
        alert('number can be less than 13 and more than 0')
    }
}