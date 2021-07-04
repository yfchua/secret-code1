def on_button_pressed_ab():
    global x, l, secretcode
    for index in range(6):
        x = Math.random_boolean()
        if x == True:
            l = "A"
        else:
            l = "B"
        secretcode = "" + secretcode + l
input.on_button_pressed(Button.AB, on_button_pressed_ab)

l = ""
secretcode = ""
x = False
x = True
secretcode = ""
l = ""

def on_forever():
    pass
basic.forever(on_forever)
