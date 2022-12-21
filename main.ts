enum RadioMessage {
    message1 = 49434,
    e = 46605
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber >= 2) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(1, 10))
})
input.onButtonPressed(Button.AB, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
	
})
radio.setGroup(64)
basic.forever(function () {
	
})
