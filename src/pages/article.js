import React from 'react'
import Link from 'gatsby-link'

const ArticlePage = ({data}) => (
    <div>
        <h1>{data.strapiArticle.title}</h1>
        <p>By <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>
        <p>{data.strapiArticle.content}</p>
    </div>
)

export default ArticlePage

export const query = graphql`
    query ArticlePage($id: String) {
        strapiArticle(id: {eq: $id}) {
            title
            content
            author {
                id
                username
            }
        }
    }
`