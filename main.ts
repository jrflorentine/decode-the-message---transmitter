let text_list = [
"Hi",
"my",
"name",
"is",
"Trix"
]
basic.forever(function () {
    for (let index = 0; index <= text_list.length; index++) {
        radio.setGroup(index)
        radio.sendString("" + (text_list[index]))
    }
})
