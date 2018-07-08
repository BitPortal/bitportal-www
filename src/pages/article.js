import React from 'react'
import SectionBanner from '../components/Index/SectionBanner'
import ShareGroup from '../components/ShareGroup'
import Markdown from 'react-markdown'

import './article.less'

class ArticlePage extends React.Component {
    constructor ({props, data}) {
        super(props)
        this.data = data
    }
    render () {
        let updatedAt = new Date(this.data.strapiArticle.updatedAt)
        let articleUpdatedAt = updatedAt.toDateString()

        return (
            <div className="article-page" style={{paddingBottom: '54px'}}>
                <SectionBanner/>
                <div className="container">
                    <div className="bread-crumb">
                        Home - Blog - {this.data.strapiArticle.title}
                    </div>
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
                                    {articleUpdatedAt}
                                </div>
                            </div>
                            <div className="col-sm-10">
                                <div className="article-tag">{this.data.strapiArticle.tag}</div>
                                <h1 className="article-title">{this.data.strapiArticle.title}</h1>
                                <div className="article-divider"> </div>
                                <p className="article-content"><Markdown source={this.data.strapiArticle.content}/></p>
                                <ShareGroup theme={'gradient'}/>
                            </div>
                        </div>
                        {/*<p>By <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>*/}
                    </div>
                </div>


            </div>
        )
    }
}

export default ArticlePage

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