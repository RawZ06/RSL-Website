import * as fs from 'fs'
import path from "node:path";
import {homePath} from "~/server/core/home-path";
export function presetReader(filename: string) {
    const dirPath = path.join(homePath(), 'presets');
    const files = fs.readdirSync(dirPath);
    if(!files.includes(filename)) {
        throw new Error(`Could not read preset file: ${filename}`);
    }
    const filePath = path.join(homePath(), 'presets', filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}