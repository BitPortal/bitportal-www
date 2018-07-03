import React from 'react'
import Link from 'gatsby-link'
import ArticleItem from '../components/ArticleItem'

const IndexPage = ({data}) => (
  <div>
      <ul>
      {data.allStrapiArticle.edges.map(document => (
          <ArticleItem articleData={document}/>
        //   <li key={document.node.id}>
        //   <h2>
        //     <Link to={`/${document.node.id}`}>{document.node.title}</Link>
        //   </h2>
        //   <p>
        //     {document.node.content}
        //   </p>
        // </li>
      ))}
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`