let numberSeries = []

function checkPriority(number) {
    if (!!number) {
        let num = String(number)
        if (num === "")
            return "Please enter a number"

        if (numberSeries.includes(num)) {
            return "HIGH PRIORITY"
        }
        else {
            numberSeries.push(num)
            return "GENERAL"
        }
    }
    else {
        return "Got undefined number. Please enter a proper number"
    }
}

function test() {
    console.log(checkPriority("8527768"))
    console.log(checkPriority("85277681"))
    console.log(checkPriority("8527768"))
    console.log(checkPriority("8527768138"))
    console.log(checkPriority("8527768138"))
}

test()