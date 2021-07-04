let t = 0
let secretcode = ""
let mycode = ""
let x = false
let l = ""
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    for (let index = 0; index <= t - 1; index++) {
        basic.showString(secretcode.charAt(index))
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    mycode = "" + mycode + "A"
})
input.onButtonPressed(Button.AB, function () {
    secretcode = ""
    mycode = ""
    x = true
    l = ""
    t = randint(1, 7)
    basic.showIcon(IconNames.Diamond)
    for (let index = 0; index < t; index++) {
        x = Math.randomBoolean()
        if (x == true) {
            l = "A"
        } else {
            l = "B"
        }
        basic.showString(l)
        secretcode = "" + secretcode + l
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    mycode = "" + mycode + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (secretcode == mycode) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.Yes)
    } else {
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.No)
    }
    mycode = ""
})
basic.forever(function () {
	
})
