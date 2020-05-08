let hidden = false
function backslashDown() {
    if (hidden) {
        document.body.style.cursor = "default"
        hidden = false
    } else {
        document.body.style.cursor = "none"
        hidden = true
    }
}
