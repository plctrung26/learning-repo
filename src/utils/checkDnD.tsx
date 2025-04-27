export function checkDnD(a: any, b: any): boolean {
    if (a.length !== b.length) return true;
    for (let i = 0; i < a.length; i++) {
        if (a[i].id !== b[i].id) return true;
    }
    return false;
}