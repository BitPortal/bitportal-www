import React from 'react'
import Layout from '../components/Layout'
import {withIntl} from '../i18n'
import {FormattedMessage} from 'react-intl'
import '../styles/pages/404.less'

class NotFoundPage extends React.Component{
    render () {
        return (
            <Layout>
                <div className="not-found-page">
                    <h1><FormattedMessage id="notFound.title"/></h1>
                    <p><FormattedMessage id="notFound.content"/></p>
                </div>
            </Layout>
        )
    }
}

export default withIntl(NotFoundPage)
