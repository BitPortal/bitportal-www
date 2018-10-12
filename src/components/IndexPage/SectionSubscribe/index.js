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
                                    <a href="http://www.ratio.fund/" target="_blank">
                                        <img src='/static/partners/1.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://slowmist.io/" target="_blank">
                                        <img src='/static/partners/2.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/3.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://www.ihuoqiu.com/" target="_blank">
                                        <img src='/static/partners/4.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="http://cointegra.io/" target="_blank">
                                        <img src='/static/partners/5.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <img src='/static/partners/6.png'/>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://btccpooleos.com/" target="_blank">
                                        <img src='/static/partners/btccpool.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://dapp.pub/" target="_blank">
                                        <img src='/static/partners/DappPub.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://www.dexlize.org/" target="_blank">
                                        <img src='/static/partners/Dexlize.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="http://eoseco.net/#" target="_blank">
                                        <img src='/static/partners/EOSCO.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://eospark.com/" target="_blank">
                                        <img src='/static/partners/EOSpark.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://imeos.one/" target="_blank">
                                        <img src='/static/partners/imeos.png'/>
                                    </a>
                                </div>
                                <div className='col-md-2 col-xs-6 partner-item'>
                                    <a href="https://kyubey.network/" target="_blank">
                                        <img src='/static/partners/kyubey.png'/>
                                    </a>
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