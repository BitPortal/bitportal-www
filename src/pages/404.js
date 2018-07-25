import React from 'react'

import {FormattedMessage} from 'react-intl'
import '../styles/pages/404.less'

class NotFoundPage extends React.Component {
    constructor({props}) {
        super(props)
    }

    render() {
        return (
                <div className="not-found-page">
                    <h1><FormattedMessage id="notFound.title"/></h1>
                    <p><FormattedMessage id="notFound.content"/></p>
                </div>
        )
    }
}

export default NotFoundPage
