basic.forever(function () {
    basic.showIcon(IconNames.No)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    basic.pause(2000)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    basic.pause(2000)
    SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 10) {
        basic.showIcon(IconNames.Yes)
        SuperBit.Servo2(SuperBit.enServo.S1, 90)
        music.play(music.stringPlayable("D F A C5 - - - - ", 150), music.PlaybackMode.UntilDone)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
        basic.pause(5000)
        SuperBit.MotorRun(SuperBit.enMotors.M1, 0)
        SuperBit.Servo2(SuperBit.enServo.S1, 0)
        music.play(music.stringPlayable("C5 A F D - - - - ", 150), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
    }
})
