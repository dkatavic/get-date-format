import { expect } from "chai";
import getAllFormats from "./getAllFormats";

describe("getAllFormats", () => {
  it("Should get all format conbinations", () => {
    const input = {
      dayFormats: ["D"],
      monthFormats: ["M"],
      yearFormats: ["YYYY"],
      delimiters: ["-"]
    };
    const expected = [
      "D-M-YYYY",
      "D-YYYY-M",
      "M-D-YYYY",
      "M-YYYY-D",
      "YYYY-D-M",
      "YYYY-M-D"
    ];
    const result = getAllFormats(input);
    expect(result).to.deep.equal(expected);
  });

  it("Should use default settings", () => {
    const formats = getAllFormats({});
    expect(formats.length).to.be.equal(144);
  });
});
