module.exports = {
    siteMetadata: {
        title: 'Bitportal Blog',
    },
    plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-less',
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: 'http://35.194.142.236:1337',
                contentTypes: [
                    'article',
                    'banner',
                    'user'
                ]
            }
        }
    ],
}
