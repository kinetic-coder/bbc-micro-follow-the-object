let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let distance = 0
function showStopLights () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.show()
}
function showGoLights () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
    moveMotorZIP.show()
}
basic.forever(function () {
    Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, 15)
    distance = Kitronik_Move_Motor.measure()
    if (distance > 10) {
        showGoLights()
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
    } else {
        showStopLights()
        Kitronik_Move_Motor.stop()
    }
})
