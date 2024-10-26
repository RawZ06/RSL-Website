export function homePath() {
    if(typeof process.cwd !== 'function') {
        return '/'
    } else {
        return process.cwd()
    }
}