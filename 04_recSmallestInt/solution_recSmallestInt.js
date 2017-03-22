function recSmallestInt(arr) {
    if (arr.length === 1) { 
        return arr.pop(); 
    }
    else { 
        var a = [arr.pop()];
        return Math.min(recSmallestInt(arr), a);
    }
}