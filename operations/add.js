module.exports = (...args) => {
    return args.reduce(
        (agg, val) => {
            if (!isNaN(val)) {
                return agg += val;
            }
            else throw "not a number";

        }, 0);
}

