const {remove_from_array, array_has} = require("./utils");

class Keyboard {
    /**
     * Keyboard class constructor.
     * @param {Object<Array>} binds
     */
    constructor(binds) {
        this.gkm = require('gkm')

        this.pressed = []

        /**
         * Array of provided keybinds
         * @type {Object<Array>}
         */
        this.keybinds = binds

        this.gkm.events.on('key.*', data => {
            const key = data[0]

            if (key === 'Undefined') return

            if (array_has(this.pressed, key)) {
                this.onkeyup(key)

                this.pressed = remove_from_array(this.pressed, key)

                this.onclick(key)
            } else {
                this.onkeydown(key)

                this.pressed.push({value: key, used: false})
            }
        })
    }

    onclick() {

    }

    onkeyup(key) {
        for(let bind_name in this.keybinds) {
            const bind = this.keybinds[bind_name]

            if(bind.length !== this.pressed.length) continue

            let valid = true
            for(let item of this.pressed) {
                if(item.used) {
                    valid = false
                    break
                }

                if(!bind.includes(item.value)) {
                    valid = false
                    break
                }
            }

            if(!valid) continue

            for(let i in this.pressed) {
                this.pressed[i].used = true
            }

            this.onbind({bind: bind_name, inst: this})
        }
    }

    onkeydown() {
    }

    onbind(e) {

    }
}


module.exports = {
    Keyboard: Keyboard,
}