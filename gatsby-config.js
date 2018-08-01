module.exports = {
    siteMetadata: {
        title: 'BitPortal Blog',
        siteUrl: `https://www.bitportal.io`,
    },
    plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-less',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'http://localhost:1337',
                contentTypes: [
                    'article',
                    'banner',
                    'question'
                ]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`
        }

    ],
}
