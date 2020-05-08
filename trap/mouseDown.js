function mouseDown(e) {

    let action = 0
    switch(e.buttons) {
        case 1:
            if (e.metaKey || e.ctrlKey || e.altKey) action = 2
            else env.action = 1
            break

        case 2:
            env.action = 2
            break

        default:
            env.action = 0
    }

    if (env.action) {
        lab.field.poke(e.clientX, e.clientY, env.action)
    }
}
