import React from 'react'
import Link from 'gatsby-link'
import BannerItem from '../components/BannerItem'
import ArticleItem from '../components/ArticleItem'
import SectionBanner from '../components/Index/SectionBanner'

const IndexPage = ({data}) => (
  <div className="container index-page" style={{paddingBottom: '54px'}}>
      <SectionBanner/>
      <div className="row">
          {data.allStrapiBanner.edges.map(document => (
              <BannerItem bannerData={document} key={document.node.id}/>
          ))}
      </div>
      <div className="row">
      {data.allStrapiArticle.edges.map(document => (
          <ArticleItem articleData={document} key={document.node.id}/>
        //   <li key={document.node.id}>
        //   <h2>
        //     <Link to={`/${document.node.id}`}>{document.node.title}</Link>
        //   </h2>
        //   <p>
        //     {document.node.content}
        //   </p>
        // </li>
      ))}
      </div>

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
          language
          img_url
          jump_url
          type
          status
          tag
        }
      }
    }
    allStrapiBanner {
      edges {
        node {
          id
          title
          img_url
          jump_url
          display_priority
        }
      }
    }
  }
`