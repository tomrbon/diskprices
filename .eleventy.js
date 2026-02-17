module.exports = function(eleventyConfig) {
  // Add custom filters
  eleventyConfig.addFilter('slug', function(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  });

  eleventyConfig.addFilter('formatNumber', function(num) {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  });

  eleventyConfig.addFilter('formatInt', function(num) {
    return num.toLocaleString('en-US', {
      maximumFractionDigits: 0
    });
  });

  // Add global data
  eleventyConfig.addGlobalData('year', () => new Date().getFullYear());
  eleventyConfig.addGlobalData('categories', () => ['HDD', 'SSD', 'Tape', 'RAM', 'SD Card']);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');

  // Watch targets
  eleventyConfig.addWatchTarget('./css/');
  eleventyConfig.addWatchTarget('./js/');

  return {
    dir: {
      input: '.',
      output: '_site',
      includes: '_includes',
      data: '_data'
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
