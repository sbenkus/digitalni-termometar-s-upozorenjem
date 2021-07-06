let termometar = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
    basic.pause(500)
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(2000)
})
basic.forever(function () {
    termometar = input.temperature()
    if (termometar < 19) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (termometar >= 19 && termometar <= 22) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
