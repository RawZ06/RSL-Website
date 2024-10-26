export function homePath() {
    if(process.env.NODE_ENV !== 'production') {
        return '/'
    } else {
        return process.cwd()
    }
}