import React from 'react'
import SectionBanner from '../components/Index/SectionBanner'
import Markdown from 'react-markdown'

import './article.less'

const ArticlePage = ({data}) => (
    <div className="article-page" style={{paddingBottom: '54px'}}>
        <SectionBanner/>
        <div className="container">
            <div className="bread-crumb">
                Home - Blog - {data.strapiArticle.title}
            </div>
            <div className="article-page-wrap">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="article-avatar">
                            {data.strapiArticle.author.avatar}
                            <img src={data.strapiArticle.author.avatar}/>
                        </div>
                        <div className="article-author">
                            {data.strapiArticle.author.username}
                        </div>
                        <div className="article-updated-at">
                            {data.strapiArticle.updatedAt}
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="article-tag">{data.strapiArticle.tag}</div>
                        <h1 className="article-title">{data.strapiArticle.title}</h1>
                        <div className="article-divider"> </div>
                        <p className="article-content"><Markdown source={data.strapiArticle.content}/></p>
                    </div>
                </div>
                {/*<p>By <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p>*/}
            </div>
        </div>


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
            createdAt
            updatedAt
            tag
        }
    }
`