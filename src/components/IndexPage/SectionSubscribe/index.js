import React from 'react'
import {FormattedMessage} from 'react-intl'
import Fade from 'react-reveal/Fade'
import MailChimp from '../../Email/MailChimp/index'
import './style.less'

class SectionSubscribe extends React.Component {
    render() {
        return (
            <section className='section-wrap section-subscribe-partners'>
                <div className="container">
                    <Fade bottom>
                        <div className="section-subscribe">
                            <h2 className="section-title title-features"><FormattedMessage id="subscribe.title"/></h2>
                            <div className='section-text text-features'>
                                <FormattedMessage id="subscribe.text1"/><br/>
                                <FormattedMessage id="subscribe.text2"/>
                            </div>
                            <div className='subscribe-form-wrap'>
                                <MailChimp/>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="section-partners">
                            <h2 className='section-title title-features'><FormattedMessage id="partners.title"/></h2>
                            <div className="row">
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/1.png' className="partner-item-1"/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/2.png' className="partner-item-2"/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/4.png' className="partner-item-4"/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/5.png' className="partner-item-5"/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/6.png' className="partner-item-6"/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/7.png' className="partner-item-7"/>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default SectionSubscribe