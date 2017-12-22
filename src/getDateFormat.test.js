import getDateFormat from './getDateFormat'
import getSampleOfDates from './utils/getSampleOfDates'
import moment from 'moment'

test('Should get YYYY-MM-DD format from samples', () => {
  const DATE_FORMAT = 'YYYY-MM-DD'
  const sampleSize = 30
  const start = moment('2017-01-01', DATE_FORMAT)
  const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)

  const result = getDateFormat(samples)
  expect(result).toEqual(DATE_FORMAT)
})

test('Should get M-D-YY format from samples', () => {
  const DATE_FORMAT = 'M-D-YY'
  const sampleSize = 20
  const start = moment('1-1-17', DATE_FORMAT)
  const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)

  const result = getDateFormat(samples)
  expect(result).toEqual(DATE_FORMAT)
})

test('Should get M/D/YY format from samples', () => {
  const DATE_FORMAT = 'M/D/YY'
  const sampleSize = 20
  const start = moment('1/1/17', DATE_FORMAT)
  const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)

  const result = getDateFormat(samples)
  expect(result).toEqual(DATE_FORMAT)
})

test('Should rebuild all posible formats based on input parameters', () => {
  const DATE_FORMAT = 'M/D/YY'
  const sampleSize = 20
  const start = moment('1/1/17', DATE_FORMAT)
  const samples = getSampleOfDates(start, sampleSize, DATE_FORMAT)

  const result = getDateFormat(samples, { dayFormats: ['D'] })
  expect(result).toEqual(DATE_FORMAT)
})

test('Should return null if it can`t find format', () => {
  const samples = ['foo', 'bar', '2017-01-01']

  const result = getDateFormat(samples)
  expect(result).toEqual(null)
})

test('Should throw if sample of dates is not an array', () => {
  expect(getDateFormat.bind(null, 'someString')).toThrow('Date samples should be type of Array')
})
