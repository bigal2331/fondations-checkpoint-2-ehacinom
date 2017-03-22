function newObj(constructorFunc) {
    return Object.create(constructorFunc.prototype);
}