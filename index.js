const scribble = require('scribbletune')

const clip = scribble.clip({
    notes: scribble.scale('c4 major'),
    pattern: 'x'.repeat(8),
})

scribble.midi(clip)
