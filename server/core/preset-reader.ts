import * as fs from 'fs'
import path from "node:path";
export function presetReader(filename: string) {
    const dirPath = path.join(process.cwd(), 'presets');
    const files = fs.readdirSync(dirPath);
    if(!files.includes(filename)) {
        throw new Error(`Could not read preset file: ${filename}`);
    }
    const filePath = path.join(process.cwd(), 'presets', filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}