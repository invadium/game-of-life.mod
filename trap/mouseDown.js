function mouseDown(e) {

    let action = 0
    switch(e.buttons) {
        case 1:
            if (e.metaKey || e.ctrlKey || e.altKey) action = 2
            else action = 1
            break
        case 2:
            action = 2
            break
    }

    if (action) {
        lab.field.poke(e.clientX, e.clientY, action)
    }
}
