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
        let articleTag = this.props.articleData.node.tag ?  <div className="article-tag">{this.props.articleData.node.tag}</div> : '',
            articlePath = this.props.articleData.node.customized_url ? this.props.articleData.node.customized_url : this.props.articleData.node.id,
            articleImg = this.props.articleData.node.img_url ? <img className="article-img" src={this.props.articleData.node.img_url}/> : ''
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
                        <Link to={`/blog/${articlePath}`}>
                            <button className="article-btn"><FormattedMessage id="viewMore"/></button>
                        </Link>
                    </div>
                    <div className="article-shadow"/>
                </div>
            </div>
        )
    }

}

export default ArticleItem