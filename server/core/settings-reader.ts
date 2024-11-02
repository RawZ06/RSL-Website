export function settingsReader(fullUrl: string) {
  return fetch(fullUrl + "/settings/settings.json");
}
