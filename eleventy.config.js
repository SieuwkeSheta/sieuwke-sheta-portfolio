export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles")
  eleventyConfig.addPassthroughCopy("scripts")
  eleventyConfig.addPassthroughCopy("assets")
  eleventyConfig.ignores.add("11ty-practicum-2026/**")
}