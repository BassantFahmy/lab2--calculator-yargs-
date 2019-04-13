module.exports = (first, ...args) => {
    return args.reduce(
        (agg, val) => {
            if (!(val == 0 || isNaN(val))) {
                return agg /= val;
            }
            else throw "you can not div a number by zero or string";
        }, first);
}

