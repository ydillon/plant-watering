let reading = 0
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showString("Hello!")
basic.forever(function () {
    reading = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    reading,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    if (reading < 500) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
