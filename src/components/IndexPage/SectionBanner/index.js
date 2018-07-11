import React from 'react'
import './style.less'
import {FormattedMessage} from 'react-intl'

class SectionBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.hideDetail) {
            document.getElementsByClassName('section-banner')[0].className += ' hideDetail';
        }
    }

    render() {

        return (
            <section className='section-wrap section-banner'>
                <div className='container'>
                    <div className='page-banner-title'>
                        <FormattedMessage id='banner.title1' defaultMessage={'title1'}/><br/>
                        <FormattedMessage
                            id="banner.title2"/>
                    </div>
                    <ul className='page-banner-text-wrap'>
                        <li className='page-banner-text'><img className='banner-icon'
                                                              src='/static/icon/icon-clock.png'/>
                            <div className="page-banner-content"><FormattedMessage id="banner.text1"/></div>
                        </li>
                        <li className='page-banner-text'>
                            <img className='banner-icon' src='/static/icon/icon-safe.png'/>
                            <div className="page-banner-content"><FormattedMessage id="banner.text2"/></div>
                        </li>
                        <li className='page-banner-text'>
                            <img className='banner-icon' src='/static/icon/icon-net.png'/>
                            <div className="page-banner-content"><FormattedMessage id="banner.text3"/></div>
                        </li>
                    </ul>
                    <div className='page-banner-download-wrap'>
                        <div className='page-banner-download-ios'>
                            <a href="https://www.pgyer.com/bitportal">
                                <img className='ios-download' src='/static/ios-download.png'/>
                            </a>
                        </div>
                        <div className="page-banner-download-android">
                            <a href="https://www.pgyer.com/bitportal">
                                <img className='android-download' src='/static/android-download.png'/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionBanner