import * as fs from 'fs'
import path from "node:path";
export function settingsReader() {
    const filePath = path.join(process.cwd(), 'settings', 'settings.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}