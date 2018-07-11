import React from 'react'
import {FormattedMessage} from 'react-intl'
import SendCloud from '../../Email/SendCloud'
import MailChimp from '../../Email/MailChimp'
import './style.less'

class SectionSubscribe extends React.Component {
    render() {
        let MailComponent = true ? <SendCloud/> : <MailChimp/>
        return (
            <section className='section-wrap section-subscribe-partners'>
                <div className="container">
                    <div className="section-subscribe">
                        <h2 className="section-title title-features"><FormattedMessage id="subscribe.title"/></h2>
                        <div className='section-text text-features'>
                            <FormattedMessage id="subscribe.text1"/><br/><br/>
                            <FormattedMessage id="subscribe.text2"/>
                        </div>
                        <div className='subscribe-form'>
                            {MailComponent}
                        </div>
                    </div>
                    <div className="section-partners">
                        <h2 className='section-title title-features'><FormattedMessage id="partners.title"/></h2>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/1.png' className="partner-item-1"/>
                        </div>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/2.png' className="partner-item-2"/>
                        </div>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/3.png' className="partner-item-3"/>
                        </div>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/4.png' className="partner-item-4"/>
                        </div>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/5.png' className="partner-item-5"/>
                        </div>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/6.png' className="partner-item-6"/>
                        </div>
                        <div className='col-md-3 col-xs-6 partner-item'>
                            <img src='/static/partners/7.png' className="partner-item-7"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SectionSubscribe