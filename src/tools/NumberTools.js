export const numberIterator = (start, end) => {
    if (!end) {
        start = 0;
        end = start;
    }
    return Array.from(Array(end - start + 1).keys()).map(x => x + start);
}

export const round2 = (num) => {
    return Math.round(num * 100) / 100;
}

export const round3 = (num) => {
    return Math.round(num * 1000) / 1000;
}

export const round4 = (num) => {
    return Math.round(num * 10000) / 10000;
}
export const round5 = (num) => {
    return Math.round(num * 100000) / 100000;
}

export function isFloat(n) {
    return n === +n && n !== (n | 0);
}