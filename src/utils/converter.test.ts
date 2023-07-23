import { kebabToPascalCase } from './converter'

describe('Converter', () => {
  it.each([
    ['valid-thru', 'ValidThru'],
    ['cvv', 'Cvv'],
  ])(
    'converts kebab string "%s" to PascalCase string "%s"',
    (kebabString: string, PascalCaseString: string) => {
      expect(kebabToPascalCase(kebabString)).toBe(PascalCaseString)
    },
  )
})
