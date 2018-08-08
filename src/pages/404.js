import React from 'react'
import Layout from '../components/Layout'
import {withIntl} from '../i18n'
import {FormattedMessage} from 'react-intl'
import '../styles/pages/404.less'

class NotFoundPage extends React.Component{
    constructor (props) {
        super(props)

        let screenHeight = typeof window !== 'undefined' ? window.screen.availHeight : '100%';

        this.state = {
            pageStyles: {
                minHeight: screenHeight ? (screenHeight - 380) : '100%'
            }
        }
    }
    render () {
        return (
            <Layout>
                <div className="not-found-page" style={this.state.pageStyles}>
                    <div className="container">
                        <h1><FormattedMessage id="notFound.title"/></h1>
                        <p><FormattedMessage id="notFound.content"/></p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default withIntl(NotFoundPage)
