import React from 'react'
import {FormattedMessage} from 'react-intl'
import Fade from 'react-reveal/Fade'
import Email from '../../Email'
import './style.less'

class SectionSubscribe extends React.Component {
    render() {
        return (
            <section className='section-wrap section-subscribe-partners'>
                <div className="container">
                    <Fade bottom>
                        <a className="section-subscribe-wrapper">
                            <div className="section-subscribe">
                                <h2 className="section-title title-features"><FormattedMessage id="subscribe.title"/>
                                </h2>
                                <div className='section-text text-features'>
                                    <FormattedMessage id="subscribe.text1"/><br/>
                                    <FormattedMessage id="subscribe.text2"/>
                                </div>
                                <div className='subscribe-form-wrap'>
                                    <Email type={'mailchimp'}/>
                                </div>
                            </div>
                        </a>
                    </Fade>
                    <Fade bottom>
                        <div className="section-partners">
                            <h2 className='section-title title-features'><FormattedMessage id="partners.title"/></h2>
                            <div className="row">
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/1.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/2.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/3.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/4.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/5.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/6.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/btccpool.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/DappPub.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/Dexlize.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/EOSCO.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/EOSpark.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/imeos.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/kyubey.png'/>
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