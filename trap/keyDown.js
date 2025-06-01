function keyDown(e) {
    if (e.repeat) return
    
    switch(e.action) {
        case 'pause':
            lab.field.paused = !lab.field.paused
            break
        case 'speedUp':
            lab.field.adjustPeriod(.75)
            break
        case 'speedDown':
            lab.field.adjustPeriod(1.25)
            break
        case 'speedNormal':
            lab.field.setPeriod(.5)
            break

        case 'switchInfo':
            lab.field.showStat = !lab.field.showStat
            break
        case 'switchCursor':
            lib.switchCursor()
            break
    }
}
