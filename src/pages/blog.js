import React from 'react'
import BannerItem from '../components/BlogPage/BannerItem'
import ArticleItem from '../components/BlogPage/ArticleItem'
import SectionBanner from '../components/IndexPage/SectionBanner'
import Layout from '../components/Layout'
import {withIntl, Link} from '../i18n'

class BlogPage extends React.Component {
    constructor({props, data}) {
        super(props)
        this.data = data
    }

    render() {
        return (
            <Layout>
                <div className="container blog-page" style={{paddingBottom: '54px'}}>
                    <SectionBanner hideDetail={true}/>
                    <div className="row">
                        {this.data.allStrapiBanner.edges.map(document => (
                            <BannerItem bannerData={document} key={document.node.id}/>
                        ))}
                    </div>
                    <div className="row">
                        {this.data.allStrapiArticle.edges.map(document => (
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
            </Layout>
        )
    }
}

export default withIntl(BlogPage)

export const pageQuery = graphql`
  query BlogQuery {
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