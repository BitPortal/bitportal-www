import React from 'react'
import './style.less'
import Fade from 'react-reveal/Fade'
import {FormattedMessage} from 'react-intl'

class SectionBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={'section-wrap section-banner ' + (this.props.hideDetail ? 'hideDetail' : '')}>
                <div className='container'>
                    <div className='page-banner-title'>
                        <FormattedMessage id='banner.title1'/><br/>
                        <FormattedMessage
                            id="banner.title2"/>
                    </div>
                    <Fade bottom>
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
                            <a href="https://itunes.apple.com/hk/app/dexlize-bitportal/id1438712581?mt=8" className="banner-download">
                                <span className="icon icon-ios"/>
                                <FormattedMessage id="banner.downloadIos"/>
                            </a>
                            <a href="https://fir.im/bitportal" className="banner-download">
                                <span className="icon icon-android"/>
                                <FormattedMessage id="banner.downloadAndroid"/>
                            </a>
                            <a href="https://testflight.apple.com/join/9Y4NtBEQ" className="download-link"  >
                                <FormattedMessage  id="banner.joinTestFlights" />
                            </a>
                          
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default SectionBanner
