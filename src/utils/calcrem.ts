export default function calcrem(pxnum: number, min: number, max: number) {
    const digit = 5; //桁数
    const remlist: number[] = [];
    for (let i = min; i <= max; i++) {
        const rem = i / pxnum;
        remlist.push(parseFloat(rem.toFixed(digit)));
    }

    return remlist;
}
