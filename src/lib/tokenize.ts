export function ToChars(s: string): string[] {
    return s
        .replace(/\(/g, ' ( ')
        .replace(/\)/g, ' ) ')
        .trim()
        .split(/\s+/);
}
