export function presetReader(fullUrl: string, filename: string) {
    return fetch(fullUrl + "/presets/" + filename)
}