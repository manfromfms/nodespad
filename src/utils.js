/**
 * Removes all items matching given string from an array
 * @param {Array} array
 * @param {String} item
 * @return {Array}
 */
const remove_from_array = (array, item) => {
    return array.filter((v) => {
        return v.value !== item
    })
}


const array_has = (array, item) => {
    for(let i of array) {
        if (i.value === item) return true
    }

    return false
}


module.exports = {
    remove_from_array: remove_from_array,
    array_has: array_has,
}