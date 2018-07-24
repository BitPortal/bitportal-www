/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

    // You can delete this file if you're not using it

const path = require('path')

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result
        })
    )
})

exports.createPages = ({boundActionCreators, graphql, page}) => {
    const {createPage} = boundActionCreators
    const getArticles = makeRequest(graphql, `
        {
            allStrapiArticle {
                edges {
                    node {
                        id
                    }
                }
            },
            allStrapiQuestion {
                edges {
                    node {
                        id
                    }
                }
            }
        }
     `).then(result => {
        result.data.allStrapiArticle.edges.forEach(({node}) => {
            languages.forEach(({value}) => {
                createPage({
                    path: `/${value}/blog/${node.id}`,
                    component: path.resolve('src/pages/article.js'),
                    context: {
                        id: node.id,
                        originalPath: `/blog/${node.id}`,
                        languages,
                        locale: value,
                        route: true

                    }
                })
            })
        })

        result.data.allStrapiQuestion.edges.forEach(({node}) => {
            languages.forEach(({value}) => {
                createPage({
                    path: `/${value}/question/${node.id}`,
                    component: path.resolve('src/pages/question.js'),
                    context: {
                        id: node.id,
                        originalPath: `/blog/${node.id}`,
                        languages,
                        locale: value,
                        route: true
                    }
                })
            })
        })
    })
    return getArticles
}

const {languages} = require('./src/i18n/locales')

exports.onCreatePage = ({page, boundActionCreators}) => {
    const {createPage, deletePage} = boundActionCreators

    if (page.path.includes('404')) {
        return Promise.resolve()
    }

    return new Promise(resolve => {
        const redirect = path.resolve('src/i18n/redirect.js')
        const redirectPage = {
            ...page,
            component: redirect,
            context: {
                languages,
                locale: '',
                routed: false,
                redirectPage: page.path,
            },
        }
        deletePage(page)
        createPage(redirectPage)

        languages.forEach(({value}) => {
            const localePage = {
                ...page,
                originalPath: page.path,
                path: `/${value}${page.path}`,
                context: {
                    languages,
                    locale: value,
                    routed: true,
                    originalPath: page.path,
                },
            }
            createPage(localePage)
        })

        resolve()
    })
}