const BORDER = 1

function draw() {
    const g = lab.grid
    const w = g.fieldWidth()
    const h = g.fieldHeight()
    const W = g.CELL_WIDTH
    const CW = W - 2*BORDER

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const s = g.get(x, y)
            if (s) {
                fill(.55, .45, .5)
                rect(x * W + BORDER, y * W + BORDER, CW, CW)
            }
        }
    }
}
