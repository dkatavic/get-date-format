import comb from "js-combinatorics"
import flatten from "array-flatten"
/**
* Get all date format combinations
* @param {String[]=['DD', 'D']} dayFormats Array of day formats
* @param {String[]=['MMM', 'MM', 'M']} monthFormats Array of month formats
* @param {String[]=['YYYY', 'YY']} yearFormats Array of year formats
* @param {String[]=['-', '/']} delimiters Array of delimiters
* @return {String[]} conbination of all possible formats
*/
export default ({
  dayFormats = ["DD", "D", "ddd", "dddd"],
  monthFormats = ["MMM", "MMMM", "MM", "M"],
  yearFormats = ["YYYY", "YY"],
  delimiters = ["-", "/", ".", " "],
}) => {
  // const dayFormats = [ 'DD', 'D']
  // const monthFormats = ['MMM', 'MM', 'M' ]
  // const yearFormats = ['YYYY', 'YY']

  const permutatedFormats = comb.permutation(
    [dayFormats, monthFormats, yearFormats],
    3
  )

  const allFormats2Arr = permutatedFormats.map(combos => {
    const cartProduct = comb.cartesianProduct(...combos).toArray()

    const conb2array = delimiters.map(delimiter =>
      cartProduct.map(conb => conb.join(delimiter))
    )

    return flatten(conb2array)
  })

  const possibleFormats = flatten(allFormats2Arr)

  return possibleFormats
}
