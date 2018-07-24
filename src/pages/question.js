import React from 'react'
import PageBanner from '../components/PageBanner'
import Layout from '../components/Layout'
import {withIntl, Link} from '../i18n'
import Markdown from 'react-markdown'
import {FormattedMessage} from 'react-intl'

import '../styles/pages/question.less'

class ArticlePage extends React.Component {
    constructor({props, data}) {
        super(props)
        this.data = data
    }

    render() {
        return (
            <Layout>
                <div className="question-page">
                    <PageBanner pageTitle={'nav.helpCenter'}/>
                    <div className="container">
                        <div className="bread-crumb">
                            <Link to="/" className="bread-crumb-link">
                                <FormattedMessage id="nav.home"/>
                            </Link>&nbsp;&nbsp;-&nbsp;&nbsp;
                            <Link to="/help" className="bread-crumb-link">
                                <FormattedMessage id="nav.helpCenter"/>
                            </Link>&nbsp;&nbsp;-&nbsp;&nbsp;
                            <span className="bread-crumb-title">
                                {this.data.strapiQuestion.title}
                                </span>
                        </div>
                        <div className="question-page-wrap">
                                <div className="container">
                                    <div className="question-tag">{this.data.strapiQuestion.type ? '#' + this.data.strapiQuestion.type : ''}</div>
                                    <h1 className="question-title">{this.data.strapiQuestion.title}</h1>
                                    <div className="question-title-divider"></div>
                                    <div className="question-content">
                                        <Markdown source={this.data.strapiQuestion.content}/>
                                    </div>
                                </div>
                            {/*<div className="row question-share-group">*/}
                                {/*<div className="col-sm-10 col-sm-offset-2">*/}
                                    {/*<div className="question-share-hint"><FormattedMessage id="share.shareTo"/></div>*/}
                                    {/*<ShareGroup theme={'gradient'}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <div className="question-divider"/>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withIntl(ArticlePage)

export const query = graphql`
    query QuestionPage($id: String) {
        strapiQuestion(id: {eq: $id}) {
            title
            content
            type
        }
    }
`