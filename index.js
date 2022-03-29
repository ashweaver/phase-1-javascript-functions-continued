// code your solution here
function saturdayFun (activity = "bathe my dog!"){
    return 'This Saturday I want to ${activity}!'
}

let mondayWork = function (acvtivity="I will work from home"){
    return 'This Monday, I will ${activity}.'

}
let wrapAdjective = function (whatever= "*"){
    return function (a = "special"){
        return 'You are ${a}${whatever}${a}!'
    }
    const encouragingPromptFunction = wrapAdjective ("!!!")
}
wrapAdjective("*")("a dedicated programmer");