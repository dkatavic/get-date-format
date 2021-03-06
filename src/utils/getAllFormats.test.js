import getAllFormats from "./getAllFormats"

test("Should get all format conbinations", () => {
  const input = {
    dayFormats: ["D"],
    monthFormats: ["M"],
    yearFormats: ["YYYY"],
    delimiters: ["-"],
  }
  const expected = [
    "D-M-YYYY",
    "D-YYYY-M",
    "M-D-YYYY",
    "M-YYYY-D",
    "YYYY-D-M",
    "YYYY-M-D",
  ]
  const result = getAllFormats(input)
  expect(result).toEqual(expected)
})

test("Should use default settings", () => {
  const formats = getAllFormats({})
  expect(formats.length).toEqual(768)
})
