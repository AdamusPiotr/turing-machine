export function uniqueSymbolsValidator(values: string[]): boolean {
  return new Set(values).size === values.length;
}

