function callAll(obj, farr) {
    values = []
    for (let f of farr) {
        values.push(f.call(obj));
    }
    return values
}