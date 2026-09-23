module.exports = async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
};
module.exports.config = {
	pathPrefix: "/info/",
}
