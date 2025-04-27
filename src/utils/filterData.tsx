export function filterData(data: any[], query: string) {
    if (!query) return data;
    const lowerQuery = query.toLowerCase()

    const rowMatches = (row: any): boolean => {
        return Object.values(row).some(val => {
            if (typeof val === "object" && val !== null) {
                return rowMatches(val);
            }
            return String(val).toLowerCase().includes(lowerQuery);
        });
    };

    return data.filter(row => rowMatches(row));
}