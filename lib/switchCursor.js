function switchCursor() {
    const style = document.body.style
    if (style.cursor === 'none') {
        style.cursor = 'default'
    } else {
        style.cursor = 'none'
    }
}
