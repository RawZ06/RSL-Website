export function parseValues(values: Record<string, number>) {
    const sum = Object.values(values).reduce((acc, v) => acc + v, 0);
    return Object.entries(values).map(([k, v]) => ({name: k, value: Math.round((v / sum) * 10000) / 100, status: !v }))
}