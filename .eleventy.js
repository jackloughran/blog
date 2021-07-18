module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addFilter("unobsidian", function(value) {
    value.val = value.val.replace(/\^\S*<\/p>/g, "");
    value.val = value.val.replace(/\(\[\[#\^\S*\]\]\)/g, "");
    value.val = value.val.replace(/\[\[#\^\S*\]\]/g, "");
    value.val = value.val.replace(/\[\[([^\]\]]*)\]\]/g, "$1");
    
    return value;
  });
};
