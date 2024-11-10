export function helpReader(fullUrl: string) {
  return fetch(fullUrl + "/help.md");
}
