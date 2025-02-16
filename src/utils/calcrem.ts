export default function calcrem(pxnum: number) {
    const digit = 5;
    console.log(pxnum);
    const remlist: number[] = [];
    for (let i = 1; i <= 100; i++) {
        const rem = i / pxnum;
        remlist.push(parseFloat(rem.toFixed(digit)));
    }
    console.log(remlist);

    return remlist;
}
