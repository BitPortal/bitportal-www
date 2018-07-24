import React from 'react'
import './style.less'
import {FormattedMessage} from 'react-intl'

export default class PageBanner extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-banner">
                    <div className="page-banner-title">
                        {<FormattedMessage id={this.props.pageTitle}/> || <FormattedMessage id="name"/>}
                    </div>
                </div>
            </div>
        )
    }
}