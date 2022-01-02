let distance = 0
basic.forever(function () {
    Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
    distance = Kitronik_Move_Motor.measure()
    if (distance > 10) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 100)
    }
})
