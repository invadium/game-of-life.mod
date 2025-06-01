function mouseMove(e) {
    if (env.action) {
        // apply action on mouse down
        lab.field.poke(e.clientX, e.clientY, env.action)
    }
}
