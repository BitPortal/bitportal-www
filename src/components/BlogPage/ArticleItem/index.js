import React from 'react'
import './style.less'
import moment from 'moment'
import {FormattedMessage} from 'react-intl'
import {Link} from '../../../i18n'

class ArticleItem extends React.Component {
    componentWillMount() {
        //format brief article content
        let articleContent = this.props.articleData.node.content
        this.props.articleData.node.content = articleContent.replace(/[#]/g, '').slice(0, 250) + '...';
    }

    render() {
        console.log(this.props.articleData)
        //conditionally render article image and tags
        let articlePath = this.props.articleData.node.customized_url ? this.props.articleData.node.customized_url : this.props.articleData.node.id;
        return (
            <div className="article-item">
                <div className="col-sm-2 col-xs-12">
                    <div className="article-img">
                        <Link to={`/blog/${articlePath}`}>
                            {this.props.articleData.node.tag &&
                            <div className="article-tag">{this.props.articleData.node.tag}</div>}
                            {this.props.articleData.node.img_url && <img src={this.props.articleData.node.img_url}/>}
                        </Link>
                    </div>
                </div>
                <div className="col-sm-10 col-xs-12">
                    <div className="article-title"><Link
                        to={`/blog/${articlePath}`}>{this.props.articleData.node.title}</Link></div>
                    <div className="article-content">
                        {this.props.articleData.node.content}
                    </div>
                </div>
                <div className="col-sm-10 col-sm-offset-2 article-info">
                    <div className="article-author">
                        {this.props.articleData.node.author.name} · {moment(this.props.articleData.node.createdAt).locale('zh-cn').fromNow()}
                    </div>
                </div>
            </div>
        )
    }

}

export default ArticleItem