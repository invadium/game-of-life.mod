const PERIOD = 1
const CELL_WIDTH = 16

let gen = 0
let w, h
const field = []

function fieldWidth() {
    return w
}

function fieldHeight() {
    return h
}

function get(x, y) {
    // warp coordinates
    if (x < 0) x += w
    if (x >= w) x = x % w
    if (y < 0) y += h
    if (y >= h) y = y % h

    return field[x][y].state
}

function getNeighbours(x, y) {
    let n = 0
    if (get(x-1, y-1)) n++
    if (get(x, y-1)) n++
    if (get(x+1, y-1)) n++
    if (get(x-1, y)) n++
    if (get(x+1, y)) n++
    if (get(x-1, y+1)) n++
    if (get(x, y+1)) n++
    if (get(x+1, y+1)) n++
    return n
}

function init() {
    w = floor(rx(1)/CELL_WIDTH)
    h = floor(ry(1)/CELL_WIDTH)

    for (let x = 0; x < w; x++) {
        field[x] = []
        for (let y = 0; y < h; y++) {
            field[x][y] = {
                state: 0,
                next: 0,
            }
        }
    }

    field[10][10].state = 1
    field[11][10].state = 1
    field[12][10].state = 1
}


function next() {
    gen ++
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (get(x, y)) {
                const n = getNeighbours(x, y)
                if (n < 2 || n > 3) field[x][y].next = -1
            } else {
                const n = getNeighbours(x, y)
                if (n === 3) field[x][y].next = 1
            }
        }
    }
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const next = field[x][y].next
            if (next) (field[x][y].next = 0)

            if (next > 0) field[x][y].state = gen
            else if (next < 0) field[x][y].state = 0
        }
    }
}

let timer = 0
function evo(dt) {
    timer += dt
    if (timer > PERIOD) {
        next()
        timer -= PERIOD
    }
}

