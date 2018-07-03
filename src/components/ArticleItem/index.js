import React from 'react'

class ArticleItem extends React.Component{
    render () {
        return (
            <div class="article-item">
                {this.props.articleData.node.title}
                {this.props.articleData.node.content}
            </div>
        )
    }
}

export default ArticleItem