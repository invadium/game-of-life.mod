function mouseDown(e) {

    let action = 0
    switch(e.buttons) {
        case 1: action = 1; break;
        case 2: action = 2; break;
    }

    if (action) {
        lab.field.poke(e.clientX, e.clientY, action)
    }
}
