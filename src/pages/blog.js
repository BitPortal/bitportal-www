import React from 'react'
import BannerItem from '../components/BlogPage/BannerItem'
import ArticleItem from '../components/BlogPage/ArticleItem'
import Layout from '../components/Layout'
import {FormattedMessage} from 'react-intl'
import '../styles/pages/blog.less'
import {withIntl, Link} from '../i18n'

class BlogPage extends React.Component {
    constructor({props, data}) {
        super(props)
        this.data = data
    }

    render() {
        return (
            <Layout>
                <div className="blog-page">
                    <div className="container">
                        <div className="bread-crumb">
                            <Link to="/" className="bread-crumb-link">
                                <FormattedMessage id="nav.home"/>
                            </Link>&nbsp;&nbsp;-&nbsp;&nbsp;
                            <span className="bread-crumb-title">
                                <FormattedMessage id="nav.blog"/>
                            </span>
                        </div>
                        <div className='blog-wrap'>
                            <div className="row blog-banner">
                                {this.data.allStrapiBanner.edges.map(document => (
                                    <BannerItem bannerData={document} key={document.node.id}/>
                                ))}
                            </div>
                            <div className="blog-content">
                                {this.data.allStrapiArticle.edges.map(document => (
                                    <div className="row" key={document.node.id}>
                                        <ArticleItem articleData={document}/>
                                    </div>
                                ))}
                            </div>
                            <div className="blog-show-more">
                                <button className='btn-show-more'>
                                    <FormattedMessage id='showMore'/>
                                </button>
                            </div>
                        </div>
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
          author{
            name
          }
          updatedAt
          createdAt
          content
          language
          img_url
          jump_url
          type
          status
          tag
          customized_url
          display_priority
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