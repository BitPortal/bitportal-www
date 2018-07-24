import React from 'react'
import './style.less'
import {FormattedMessage} from 'react-intl'
import {Link} from '../../../i18n'

class ArticleItem extends React.Component {
    componentWillMount() {
        //format brief article content
        let articleContent = this.props.articleData.node.content
        this.props.articleData.node.content = articleContent.replace(/[#]/g, '').slice(0, 200)
    }

    render() {
        //conditionally render article image and tags
        let articleImg = '',
            articleTag = '';
        if (this.props.articleData.node.img_url) {
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
                        <Link to={`/blog/${this.props.articleData.node.id}`}>
                            <button className="article-btn"><FormattedMessage id="viewMore"/></button>
                        </Link>
                    </div>
                    <div className="article-shadow"></div>
                </div>
            </div>
        )
    }

}

export default ArticleItem