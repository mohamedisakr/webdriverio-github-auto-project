module.exports = {
  getTrimmedText: ($locator) => $locator.getText().trim(),
  isSubstringFound: async (text, subString) => {
    const regex = new RegExp(subString);
    return await text.match(regex);
  },
};
