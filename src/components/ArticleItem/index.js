import React from 'react'
import './article.less'
import Markdown from 'react-markdown'

class ArticleItem extends React.Component{
    componentWillMount () {
        //format brief article content
        let articleContent = this.props.articleData.node.content
        this.props.articleData.node.content = articleContent.replace(/[#]/g, '').slice(0, 200)
        console.log(this.props.articleData.node.content)
    }
    render () {
        //conditionally render article image and tags
        let articleImg = '',
            articleTag = '';
        if (this.props.articleData.node.img_url){
            articleImg = <img className="article-img" src={this.props.articleData.node.img_url}/>
        }
        if (this.props.articleData.node.tag) {
            articleTag = <div className="article-tag">{this.props.articleData.node.tag}</div>
        }
        return (
            <div className="col-sm-3">
                <div className="article-item">
                    {articleImg}
                    <div className="article-item-padding-zone">
                        {articleTag}
                        <div className="article-title">{this.props.articleData.node.title}</div>
                        <div className="article-content">
                            {this.props.articleData.node.content}
                        </div>
                        <button className="article-btn">View More</button>
                    </div>
                    <div className="article-shadow"> </div>
                </div>
            </div>
        )
    }

}

export default ArticleItem