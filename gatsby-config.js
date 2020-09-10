module.exports = {
  pathPrefix: `/techproto/v6/MattDEV/doctest`,
  assetPrefix: `/Style%20Library/v7/docs`,
  siteMetadata: {
    title: 'Web Policy & Standards',
    shortName: 'Web Policy & Standards',
    description: 'The Official Web Style Guide of the Broward County, Florida Government'
  },
  plugins: [{
    resolve: '@primer/gatsby-theme-doctocat',
    options: {
      repoRootPath: '', //defaults to '.'
    }
  }]
}