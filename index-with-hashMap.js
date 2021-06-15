var HashMap = require('hashmap');
var map = new HashMap();

function checkPriority(number) {
    if (!!number) {
        let num = String(number)
        if (num === "")
            return "Please enter a number"

        let numberExistance = map.get(num)
        if (numberExistance) {
            return "HIGH PRIORITY"
        }
        else {
            map.set(num, true)
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