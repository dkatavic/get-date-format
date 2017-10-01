import moment from "moment"
import getAllFormats from "./utils/getAllFormats"

/**
 * Extract date format from provided sample of dates
 * @param {String[]} dates array of dates
 * @param {Object} options configuration options 
 * @return {String|Null} extracted date format
 */
export default (dates, options = {}) => {
  const allFormats = getAllFormats(options)
  const extractedDateFormat = allFormats.find(format =>
    dates.reduce(
      (acc, date) => acc && moment(date, format, true).isValid(),
      true
    )
  )
  return extractedDateFormat || null
}
