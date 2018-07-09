import React from 'react'
import './style.less'
import {FormattedMessage} from 'react-intl'

class ArticleComment extends React.Component{
    render () {
        return (
            <div className="article-comment">
                <div className="article-comment-list">
                    <div className="row">
                        <div className="col-sm-10 col-sm-offset-2">
                            <div className="article-comment-count">15 <FormattedMessage id="comments"/></div>
                        </div>
                    </div>
                    <div className="article-comment-item">
                        <div className="row">
                            <div className="col-sm-2 comment-user-avatar-wrap">
                                <div className="comment-user-avatar">
                                    <img src=""/>
                                </div>
                            </div>
                            <div className="col-sm-10 comment-user-info-wrap">
                                <div className="comment-user-info">
                                    <span className="comment-username">Meon</span>, <span className="comment-time">October 3, 2018</span>
                                </div>
                                <div className="comment-content">
                                    This is a comment
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-comment-post">
                    <div className="article-comment-post-hint"><FormattedMessage id="comment.postHint"/>:</div>
                    <form>
                        <div className="row comment-post-input-wrap">
                            <div className="col-sm-7">
                                <input type="text" className="comment-post-input" placeholder="Comment title"/>
                            </div>
                            <div className="col-sm-5">
                                <input type="text" className="comment-post-input" placeholder="Name"/>
                            </div>
                        </div>
                        <div className="row comment-post-content-wrap">
                            <div className="col-sm-12">
                                <textarea className="comment-post-content" placeholder="Comment text"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ArticleComment