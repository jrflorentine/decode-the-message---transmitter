def on_button_pressed_a():
    for index in range(5):
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

num_students = 20
radio.set_group(num_students)

def on_forever():
    pass
basic.forever(on_forever)
