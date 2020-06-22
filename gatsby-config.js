module.exports = {
  siteMetadata: {
    title: `Mark Swinimer`,
    description: `The personal website and blog of Mark Swinimer`,
    author: `Mark`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Mark Swinimer`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/pages/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Abril Fatface`,
          `Oleo Script`,
          `Nunito\:300,400,500,700`,
          `Barlow\:300,400,500,600,700`,
          `PT Sans Narrow\:400,700`,
          `Frank Ruhl Libre\:300,400,500,700,900`
        ],
        display: 'swap'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
