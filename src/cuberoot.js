function cuberoot(n) {
    let lower_bound = 1;
    let upper_bound = n;
    let guess = lower_bound + (upper_bound - lower_bound) / 2;
    let calculated_n = guess ** 3;
    while (!goodEnough(calculated_n, n)) {
        console.log(n, calculated_n, upper_bound, guess, lower_bound);
        if (calculated_n > n) {
            upper_bound = guess;
        } else {
            lower_bound = guess;
        }
        guess = lower_bound + (upper_bound - lower_bound) / 2;
        calculated_n = guess ** 3;
    }
    return guess;
}

function goodEnough(calculated_n, n) {
    let tolerance = 0.000001;
    return Math.abs(calculated_n - n)/n < tolerance;
}

// console.log(cuberoot(8));
// console.log(cuberoot(125));
console.log(cuberoot(2)); // 1.259918212890625 1.2599210739135742
