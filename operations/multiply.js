module.exports = (first, ...args) => {
    return args.reduce(
        (agg, val) => {
            if (!isNaN(val)) {
                return agg *= val;
            }
            else throw "not a number";
        }, first);
}

