import moment from 'moment'
import comb from 'js-combinatorics'
import flatten from 'array-flatten'

// const possibleFormats contains data like [
//   'YYYY-MM-DD',
//   'YY-MM-DD',
//   'MM-DD-YYYY',
//   'MM-DD-YY',
//   'DD-MM-YYYY',
//   'DD-MM-YY',
//   ...
// ];

// Ordering is important, becasue day '01' matches Both 'DD' and 'D', but day '1' matches only 'D' format
// 'DD' has smaller scope so it comes first
const dayFormats = [ 'DD', 'D']
const monthFormats = ['MMM', 'MM', 'M' ]
const yearFormats = ['YYYY', 'YY']

const permutatedFormats = comb.permutation([dayFormats, monthFormats, yearFormats],3)

const allFormats2Arr = permutatedFormats.map(combos => {
  const cartProduct = comb.cartesianProduct(...combos).toArray()
  return [
    ...cartProduct.map(conb => conb.join('-')),
    ...cartProduct.map(conb => conb.join('/')),
  ]
})

const possibleFormats = flatten(allFormats2Arr)

/**
 * Extract date format from provided sample of dates
 * @param {String[]} dates array of dates
 * @return {String|Null} extracted date format
 */
export default dates => {
  const extractedDateFormat = possibleFormats.find(format =>
    dates.reduce(
      (acc, date) => acc && moment(date, format, true).isValid(),
      true
    )
  )
  return extractedDateFormat || null
}
