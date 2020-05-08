function mouseMove(e) {
    if (env.action) {
        lab.field.poke(e.clientX, e.clientY, env.action)
    }
}
