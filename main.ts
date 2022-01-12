function showBackwardsLights () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
    moveMotorZIP.show()
}
function showStopLights () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.show()
}
function showGetReadyLights () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    moveMotorZIP.show()
}
function showGoLights () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    moveMotorZIP.show()
}
let distance = 0
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
showGetReadyLights()
basic.pause(2000)
basic.forever(function () {
    Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, 15)
    distance = Kitronik_Move_Motor.measure()
    if (distance > 15) {
        showGoLights()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
    } else if (distance < 5) {
        showBackwardsLights()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 50)
    } else {
        showStopLights()
        Kitronik_Move_Motor.stop()
    }
})
