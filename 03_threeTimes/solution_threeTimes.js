function threeTimes(func) {
    var times = 0;
    return function(x) {
        if (times < 3) { 
            times++;
            return func(x); 
        }
    }
}