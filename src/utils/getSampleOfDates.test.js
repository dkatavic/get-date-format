import { expect } from 'chai'
import getSampleOfDates from './getSampleOfDates'
import moment from 'moment'


test('Should get array of dates', () => {
  const dateFormat = 'YYYY-MM-DD'
  const sampleSize = 5
  const start = moment('2017-01-01', dateFormat)
  const expected = [
    '2017-01-01',
    '2017-01-02',
    '2017-01-03',
    '2017-01-04',
    '2017-01-05',
  ]
  const value = getSampleOfDates(start, sampleSize, dateFormat)
  expect(value).to.deep.equal(expected)
})
