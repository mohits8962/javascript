// let a = 0, b = 0;
// for (let i = 0; i < n; ++i) {
//     a = a + i;
// }
// for (let j = 0; j < m; ++j) {
//     b = b + j;
// }

// O(n+m)
// O(1)

// --------------------------------------------

let a = 0, b = 0;
for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
        a = a + j;
    }
}
for (let k = 0; k < n; ++k) {
    b = b + k;
}

// O(n^2 + n)
// O(1)



for (let i = 1; i < n; i = i * 2) {
    console.log(i);
}

// O(n)


function search(list, item, start, end) {
    if (start > end) {
        return false;
    }
    const mid = Math.floor((start + end) / 2);
    if (list[mid] < item) {
        return search(list, item, mid + 1, end);
    }
    if (list[mid] > item) {
        return search(list, item, start, mid - 1);
    }
    return true;
}

// O(n)