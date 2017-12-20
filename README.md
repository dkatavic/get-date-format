# get-date-format

Module that extracts date format out of sample of dates

## Intro

If you have sources of the data with inconsistent date formats, usually it is required to figure out date format of each data set before doing any analysis with the data. This module is trying to solve that issue by extracting date format of the array of the dates. The more elements are in the array, the more accurate is the prediction. 13 consecutive days are enough for accurate prediction of the date format.

This module can detect all official date formats of all the countries represented here https://en.wikipedia.org/wiki/Date_format_by_country

## Examples

Example usage:

```javascript
const getDateFormat = require('get-date-format')
// or
// import getDateFormat from 'get-date-format'

const sampleOfDates = ['2017-01-01', '2017-03-11', '2017-03-13', '2017-12-12']
const dateFormat = getDateFormat(sampleOfDates)
console.log(dateFormat)
// YYYY-MM-DD
```

If date format can't be extracted, function is returning `null``

```javascript
const getDateFormat = require('get-date-format')
// or
// import getDateFormat from 'get-date-format'

const sampleOfDates = ['some text', 'more text']
const dateFormat = getDateFormat(sampleOfDates)
console.log(dateFormat)
// null
```

## Optimizing for speed

*TODO*
