import React from 'react'
import './style.less'
import {FormattedMessage} from 'react-intl'

class SectionBanner extends React.Component {
    render() {
        return (
            <section className='section-wrap section-banner'>
                <div className='container'>
                    <div className='page-banner-title'><FormattedMessage id='banner.title1'/><br/><FormattedMessage id="banner.title2"/></div>
                </div>
            </section>
        )
    }
}

export default SectionBanner