const base = {
  name: 'Today I Learned',
  url: 'https://github.com/greglobinski/gatsby-starter-kit',
  author: 'Amberley Romo',
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} by ${base.author}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: `by ${base.author}`,

  /* url */
  siteUrl: base.url,
  siteImage: 'preview.png',
  // pathPrefix: '',

  // author
  authorName: `${base.author}`,
};

module.exports = config;
