function setupActions() {
    extend( env._keyAction, {
        space:    'pause',
        period:   'speedUp',
        pageUp:   'speedUp',
        comma:    'speedDown',
        pageDown: 'speedDown',
        home:     'speedNormal',

        backslash: 'switchInfo',
        backspace: 'switchCursor',
    })
}
