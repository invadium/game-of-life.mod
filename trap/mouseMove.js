function mouseMove(e) {
    let action = 0
    if (e.buttons === 1) action = 1
    if (e.buttons === 2) action = 2 
    if (e.metaKey || e.altKey || e.shiftKey) action = 2

    lab.grid.poke(e.clientX, e.clientY, action)
}
