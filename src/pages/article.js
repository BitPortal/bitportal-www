import React from 'react'
import SectionBanner from '../components/IndexPage/SectionBanner'
import ShareGroup from '../components/ShareGroup'
import Layout from '../components/Layout'
import {withIntl} from '../i18n'
import Markdown from 'react-markdown'
import Fade from 'react-reveal'
import {FormattedMessage} from 'react-intl'

import './article.less'

class ArticlePage extends React.Component {
    constructor({props, data}) {
        super(props)
        this.data = data
    }

    render() {
        let updatedAt = new Date(this.data.strapiArticle.updatedAt)
        let articleUpdatedAt = updatedAt.toDateString()
        return (
            <Layout>
                <div className="article-page">
                    <SectionBanner hideDetail={true}/>
                    <div className="container">
                        <Fade bottom>
                            <div className="bread-crumb">
                                <a href="http://www.corp.bitportal.io" className="bread-crumb-link"><FormattedMessage
                                    id="nav.home"/></a>&nbsp;&nbsp;-&nbsp;&nbsp;<a href="http://35.194.142.236:8000"
                                                             className="bread-crumb-link"><FormattedMessage
                                id="nav.blog"/></a>&nbsp;&nbsp;-&nbsp;&nbsp;<span
                                className="bread-crumb-title">{this.data.strapiArticle.title}</span>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="article-page-wrap">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="article-avatar">
                                            <img src={this.data.strapiArticle.author.avatar_url}/>
                                        </div>
                                        <div className="article-username">
                                            {this.data.strapiArticle.author.username}
                                        </div>
                                        <div className="article-updated-at">
                                            <span className="icon icon-time"> </span> {articleUpdatedAt}
                                        </div>
                                    </div>
                                    <div className="col-sm-10">
                                        <div className="article-tag">{this.data.strapiArticle.tag}</div>
                                        <h1 className="article-title">{this.data.strapiArticle.title}</h1>
                                        <div className="article-title-divider"></div>
                                        <div className="article-content">
                                            <Markdown source={this.data.strapiArticle.content}/>
                                        </div>

                                    </div>
                                </div>
                                <div className="row article-share-group">
                                    <div className="col-sm-10 col-sm-offset-2">
                                        <div className="article-share-hint">分享到</div>
                                        <ShareGroup theme={'gradient'}/>
                                    </div>
                                </div>
                                <div className="article-divider"></div>
                                {/* Hide Article Comment temporarily */}
                                {/*<div className="row">*/}
                                {/*<div className="col-sm-10 col-sm-offset-2">*/}
                                {/*<ArticleComment/>*/}
                                {/*</div>*/}
                                {/*</div>*/}
                                {/*<p>By <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>*/}
                            </div>
                        </Fade>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withIntl(ArticlePage)

export const query = graphql`
    query ArticlePage($id: String) {
        strapiArticle(id: {eq: $id}) {
            title
            content
            author {
                id
                username
                avatar_url
            }
            createdAt
            updatedAt
            tag
        }
    }
`