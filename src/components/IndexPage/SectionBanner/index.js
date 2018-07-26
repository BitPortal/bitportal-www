import React from 'react'
import './style.less'
import Fade from 'react-reveal/Fade'
import {FormattedMessage} from 'react-intl'
import Dialog from '../../Dialog'
import Email from '../../Email'

class SectionBanner extends React.Component {
    constructor(props) {
        super(props)
        this.showSubscribeDialog = this.showSubscribeDialog.bind(this)
        this.hideSubscribeDialog = this.hideSubscribeDialog.bind(this)
        this.state = {
            showSubscribeDialog: false
        }
    }

    componentDidMount() {
        if (this.props.hideDetail) {
            document.getElementsByClassName('section-banner')[0].className += ' hideDetail';
        }
    }

    showSubscribeDialog () {
        this.setState({
            showSubscribeDialog: true
        })
    }

    hideSubscribeDialog () {
        this.setState({
            showSubscribeDialog: false
        })
    }

    render() {
        const SubscribeDialog = <Dialog hideDialog={this.hideSubscribeDialog}>
            <div className="section-subscribe">
                <h2 className="section-title title-features"><FormattedMessage id="subscribe.title"/></h2>
                <div className='section-text text-features'>
                    <FormattedMessage id="subscribe.text1"/><br/>
                    <FormattedMessage id="subscribe.text2"/>
                </div>
                <Email type={'mailchimp'}/>
            </div>
        </Dialog>
        return (
            <section className='section-wrap section-banner'>
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
                            <button className="page-banner-subscribe" onClick={this.showSubscribeDialog}>
                                <span className="icon icon-pin"/>
                                <FormattedMessage id="subscribe"/>
                            </button>
                        </div>
                    </Fade>
                </div>
                {this.state.showSubscribeDialog && SubscribeDialog}
            </section>
        )
    }
}

export default SectionBanner