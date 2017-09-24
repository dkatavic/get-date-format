export default (start, sampleSize, dateFormat) => {
  const samples = []
  for (let i = 0; i < sampleSize; i++) {
    samples.push(start.format(dateFormat))
    start.add(1, 'day')
  }
  return samples
}