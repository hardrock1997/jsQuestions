const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    },
    h: 5
 };

// {
//     "a": 1,
//     "b.c": 2,
//     "b.d.e": 3,
//     "b.d.f.g": 4,
//     "h": 5
// }
