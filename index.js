const {Keyboard} = require('./src/keyboard')

const kb = new Keyboard({
    '123': ['NumPad 1', 'NumPad 2', 'NumPad 3'],
    '12': ['NumPad 1', 'NumPad 2'],
    '345': ['NumPad 3', 'NumPad 4', 'NumPad 5'],
    '1': ['NumPad 1']
})

kb.onbind = ({bind}) => {
    console.log(bind)
}