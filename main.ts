let distance = 0
basic.forever(function () {
    distance = Kitronik_Move_Motor.measure()
    basic.showNumber(distance)
})
