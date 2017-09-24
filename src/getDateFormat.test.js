import getDateFormat from './getDateFormat'
import getSampleOfDates from './utils/getSampleOfDates'
import { expect } from 'chai'
import moment from 'moment'

describe('getSampleOfDates', () => {
  it('Should get YYYY-MM-DD format from samples', () => {
    const DATE_FORMAT = 'YYYY-MM-DD'
    const sampleSize = 30
    const start = moment('2017-01-01', DATE_FORMAT)
    const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)
    
    const result = getDateFormat(samples)
    expect(result).to.equal(DATE_FORMAT)
  })

  it('Should get M-D-YY format from samples', () => {
    const DATE_FORMAT = 'M-D-YY'
    const sampleSize = 20
    const start = moment('1-1-17', DATE_FORMAT)
    const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)
    
    const result = getDateFormat(samples)
    expect(result).to.equal(DATE_FORMAT)
  })

  it('Should get M/D/YY format from samples', () => {
    const DATE_FORMAT = 'M/D/YY'
    const sampleSize = 20
    const start = moment('1/1/17', DATE_FORMAT)
    const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)
    
    const result = getDateFormat(samples)
    expect(result).to.equal(DATE_FORMAT)
  })

  it('Should return null if it can`t find format', () => {
    const samples = ['foo', 'bar', '2017-01-01']
    
    const result = getDateFormat(samples)
    expect(result).to.be.null
  })
})

