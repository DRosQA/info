module.exports = async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  return {
    pathPrefix: "/info/"
  }
};
