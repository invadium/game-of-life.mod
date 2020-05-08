const W = 16
const B = 1

let PERIOD = .5

let w, h
const grid = []

function init() {
    w = floor(rx(1)/W)
    h = floor(ry(1)/W)
    for (let x = 0; x < w; x++) {
        grid[x] = []
        for (let y = 0; y < h; y++) {
            grid[x][y] = {
                state: 0,
                next: false,
            }
        }
    }

    // "Acorn" config
    const cx = floor(w * .6)
    const cy = floor(h/2)

    grid[cx-2][cy-1].state = 1
    grid[cx-2][cy+1].state = 1
    grid[cx-3][cy+1].state = 1

    grid[cx][cy].state = 1

    grid[cx+1][cy+1].state = 1
    grid[cx+2][cy+1].state = 1
    grid[cx+3][cy+1].state = 1
}

function adjustPeriod(factor) {
    PERIOD *= factor
}

function getState(x, y) {
    if (x < 0) x = w - 1
    else if (x >= w) x = 0
    if (y < 0) y = h - 1
    else if (y >= h) y = 0

    return grid[x][y].state
}

function neighbours(x, y) {
    let n = 0
    for (let ny = y - 1; ny <= y + 1; ny++) {
        for (let nx = x - 1; nx <= x + 1; nx++) {
            if (x === nx && y === ny) continue
            if (getState(nx, ny)) n++
        }
    }
    return n
}

let generation = 1
function nextGeneration() {
    generation ++
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const s = getState(x, y)
            const n = neighbours(x, y)

            if (s && (n < 2 || n > 3)) {
                grid[x][y].next = true
            } else if (!s && n === 3) {
                grid[x][y].next = true
            } else {
                grid[x][y].next = false
            }
        }
    }
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (getState(x, y) && grid[x][y].next) {
                grid[x][y].state = 0
            } else if (!getState(x, y) && grid[x][y].next) {
                grid[x][y].state = generation
            }
        }
    }
}

let timer = 0
function evo(dt) {
    if (this.paused) return

    timer += dt
    if (timer >= PERIOD) {
        timer = 0
        nextGeneration()
    }
}

function draw() {
    let n = 0
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const s = getState(x, y)
            if (s) {
                n++
                const age = min(generation - s, 120)
                const light = .5 + age/240
                const hue = (s % 40)/40
                fill(hsl(hue, .6, light))
                rect(x*W+B, y*W+B, W-2*B, W-2*B)
            }
        }
    }

    if (this.showStat) {
        alignLeft()
        baseTop()
        fill(.46, 1, .4)
        font('32px moon')
        text('Gen. ' + generation, 10, 10)
        text('Pop. ' + n, 10, 45)
    }
}

function poke(gx, gy, action) {
    const x = floor(gx/W)
    const y = floor(gy/W)

    if (action === 2) grid[x][y].state = 0
    else if (action === 1 && !getState(x, y)) grid[x][y].state = generation
}
