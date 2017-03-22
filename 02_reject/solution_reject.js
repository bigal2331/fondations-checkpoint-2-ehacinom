function reject(arr, func) {
    soln = []
    for (let item of arr) {
        if (!func(item)) soln.push(item);
    }
    return soln;
}