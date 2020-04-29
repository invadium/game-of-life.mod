const BORDER = 1

function draw() {
    const g = lab.grid
    const w = g.fieldWidth()
    const h = g.fieldHeight()
    const W = g.CELL_WIDTH
    const CW = W - 2*BORDER
    const gen = g.generation()

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const s = g.get(x, y)
            if (s) {
                const age = min(gen - s, 30)
                const light = .5 + age/60
                const hue = (s % 30)/30
                fill(hsl(hue, .5, light))
                rect(x * W + BORDER, y * W + BORDER, CW, CW)
            }
        }
    }
}
