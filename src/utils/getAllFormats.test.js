import { expect } from 'chai'
import getAllFormats from './getAllFormats'

describe('getAllFormats', () => {
  it('Should get all format conbinations', () => {
    const input = {
      dayFormats: ['D', 'DD'],
      monthFormats: ['M'],
      yearFormats: ['YYYY'],
      delimiters: ['-', '/'],
    }
    const expected = ['D-M-YYYY', 'DD-M-YYYY', 'D/M/YYYY', 'DD/M/YYYY']
    const result = getAllFormats(input)
    expect(result).to.deep.equal(expected)

  })
  it('Should use default', () => {})
})