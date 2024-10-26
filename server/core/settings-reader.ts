import * as fs from 'fs'
import path from "node:path";
import {homePath} from "~/server/core/home-path";
export function settingsReader() {
    const filePath = path.join(homePath(), 'settings', 'settings.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}