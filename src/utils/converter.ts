/**
 * Convert string from kebab-case to PascalCase
 * @param text kebab-case string
 * @returns PascalCase string
 */
export const kebabToPascalCase = (text: string): string =>
  text.replace(/(^\w|-\w)/g, (text) => text.replace(/-/, '').toUpperCase())
