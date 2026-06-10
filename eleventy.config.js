module.exports = async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("navigation", function (collectionsApi) {
        return collectionsApi.getFilteredByTag("tabs").sort(function (a, b) {
            return a.data.order - b.data.order; // sort by date - ascending
        });
    });
}
