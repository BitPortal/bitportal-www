import React from 'react'
import './article.less'
import Markdown from 'react-markdown'

class ArticleItem extends React.Component{
    render () {
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
                            <Markdown source={this.props.articleData.node.content} />
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