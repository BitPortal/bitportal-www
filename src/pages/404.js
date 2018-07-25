import React from 'react'
import Layout from '../components/Layout'
import {withIntl} from '../i18n'
import FormattedMessage from 'react-intl'
import '../styles/pages/404.less'

const NotFoundPage = () => (
  <Layout>
    <div className="not-found-page">
      <h1><FormattedMessage id="404.title"/></h1>
      <p><FormattedMessage id="404.content"/></p>
    </div>
  </Layout>
)

export default withIntl(NotFoundPage)
