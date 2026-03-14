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

  // Date to ISO string (for schema.org)
  eleventyConfig.addFilter('dateToISOString', function(date) {
    if (date instanceof Date) {
      return date.toISOString();
    }
    return new Date(date).toISOString();
  });

  // Date formatting for display
  eleventyConfig.addFilter('dateFormat', function(date) {
    if (!date) return '';
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  });

  // Excerpt from content
  eleventyConfig.addFilter('excerpt', function(content, length = 150) {
    if (!content) return '';
    const stripped = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    if (stripped.length <= length) return stripped;
    return stripped.substring(0, length).trim() + '...';
  });

  // Title case filter
  eleventyConfig.addFilter('title', function(text) {
    if (!text) return '';
    return text.replace(/\w\S*/g, txt => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  });

  // Reading time estimate
  eleventyConfig.addFilter('readTime', function(content) {
    if (!content) return 1;
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return Math.max(1, minutes);
  });

  // Posts collection for blog articles
  eleventyConfig.addCollection('posts', function(collectionApi) {
    return collectionApi.getFilteredByGlob('posts/*.md')
      .sort((a, b) => b.date - a.date);
  });

  // Related articles filter for internal linking
  eleventyConfig.addFilter('relatedArticles', function(article, allArticles, limit = 4) {
    if (!article || !allArticles) return [];
    
    const scored = allArticles
      .filter(a => a.url !== article.url)
      .map(a => {
        let score = 0;
        if (a.data.category && article.data.category) {
          const sharedCats = a.data.category.filter(c => article.data.category.includes(c));
          score += sharedCats.length * 10;
        }
        const articleTags = article.data.tags || [];
        const aTags = a.data.tags || [];
        const sharedTags = articleTags.filter(t => aTags.includes(t));
        score += sharedTags.length * 3;
        return { article: a, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.article);
    
    return scored;
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
