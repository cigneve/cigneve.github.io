// .eleventy.js
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Import prior to `module.exports` within `.eleventy.js`
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED,opts={locale:"tr-tr"});
  });


  // eleventyConfig.addGlobalData("permalink", () => {
  //   return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  // });
  
    return {
    dir: {
      input: "src",
      // output: "www",
    }
  };
};
