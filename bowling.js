function sub(value, i, arr) {
    if (value === 'X') {
        return 10;
    } else if (value === '/') {
        return 10 - sub(arr[i-1], i, arr);
    } else if (value === '-' || value === undefined) {
        return 0;
    }

    return value;
}

function expand(val, i, arr) {
    if (val === 'X') {
        return [10, sub(arr[i+1], i+1, arr), sub(arr[i+2], i+2, arr)];
    } else if (val === '/') {
        return [sub(val, i, arr), sub(arr[i+1], i+1, arr)];
    }

    return val;
}

function flatten(prev, curr) {
    return [].concat(prev, curr);
}

function solve(prev, curr) {
    prev = sub(prev);
    curr = sub(curr);

    return Number(prev) + Number(curr);
}

function score(result) {
    result = result.split('');

    const len = result.length;
    if (result.lastIndexOf('X') >= len - 3 || result.lastIndexOf('/') >= len - 2) {
        result = result.concat(result.splice(-3, 3).map(sub));
    }

    return result.map(expand).reduce(flatten).reduce(solve);
}
