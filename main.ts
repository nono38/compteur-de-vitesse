input.onButtonPressed(Button.A, function () {
    demarage += 1
    if (demarage == 1) {
        temp = input.runningTime()
    } else {
        temps2 = input.runningTime() - temp
        temp = input.runningTime()
        basic.showNumber(temps2 / 1000)
    }
})
let temps2 = 0
let temp = 0
let demarage = 0
demarage = 0
basic.forever(function () {
	
})
