import React from 'react'
import SectionBanner from '../components/IndexPage/SectionBanner'
import ShareGroup from '../components/ShareGroup'
import Layout from '../components/Layout'
import {withIntl, Link} from '../i18n'
import Markdown from 'react-markdown'
import {FormattedMessage} from 'react-intl'

import '../styles/pages/article.less'

class ArticlePage extends React.Component {
    constructor({props, data}) {
        super(props)
        this.data = data
        this.updateMode = this.updateMode.bind(this)
        this.state = {
            webview: typeof location !== 'undefined' && location.href.indexOf('webview=true') > -1,
            isMobile: typeof document !== 'undefined' && document.body.clientWidth <= 768
        }
    }

    componentDidMount(){
        typeof window !== 'undefined' && window.addEventListener('resize', this.updateMode)
    }

    componentWillUnmount(){
        typeof window !== 'undefined' && window.removeEventListener('resize', this.updateMode)
    }

    updateMode(){
        this.setState({
            isMobile: typeof document !== 'undefined' && document.body.clientWidth <= 768
        })
    }

    render() {
        let updatedAt = new Date(this.data.strapiArticle.updatedAt)
        let articleUpdatedAt = updatedAt.toDateString()
        const ArticleUserInfo = (<div className="col-xs-12 col-sm-2 article-user-info">
            <div className="article-avatar">
                <img src="https://cdn.bitportal.io/media/2018/05/0b8578be-discovery_logo.png"/>
            </div>
            <div className="article-username">
                {this.data.strapiArticle.author}
            </div>
            <div className="article-updated-at">
                <span className="icon icon-time"> </span> {articleUpdatedAt}
            </div>
        </div>)
        return (
            <Layout>
                <div className={this.state.webview ? 'article-page webview' : 'article-page'}>
                    <div className="container">
                        <div className="bread-crumb">
                            <Link to="/" className="bread-crumb-link">
                                <FormattedMessage id="nav.home"/>
                            </Link>&nbsp;&nbsp;-&nbsp;&nbsp;
                            <Link to="/blog" className="bread-crumb-link">
                                <FormattedMessage id="nav.blog"/>
                            </Link>&nbsp;&nbsp;-&nbsp;&nbsp;
                            <span className="bread-crumb-title">{this.data.strapiArticle.title}</span>
                        </div>
                        <div className="article-page-wrap">
                            <div className="row">
                                {this.state.isMobile || ArticleUserInfo}
                                <div className="col-xs-12 col-sm-10">
                                    <div className="article-tag">#{this.data.strapiArticle.tag}</div>
                                    <h1 className="article-title">{this.data.strapiArticle.title}</h1>
                                    <div className="article-title-divider"></div>
                                    <div className="article-content">
                                        <Markdown source={this.data.strapiArticle.content}/>
                                    </div>
                                </div>
                                {this.state.isMobile && ArticleUserInfo}
                            </div>
                            <div className="row article-share-group">
                                <div className="col-sm-10 col-sm-offset-2">
                                    <div className="article-share-hint"><FormattedMessage id="share.shareTo"/></div>
                                    <ShareGroup linkType={'share'}/>
                                </div>
                            </div>
                        </div>
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
            customized_url
            author
            createdAt
            updatedAt
            tag
        }
    }
`
