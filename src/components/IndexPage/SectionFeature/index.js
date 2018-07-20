import React from 'react'
import {FormattedMessage} from 'react-intl'
import Fade from 'react-reveal/Fade'
import './style.less'

class SectionFeature extends React.Component {
    render() {
        return (
            <section className='section-wrap section-feature'>
                <div className="container">
                    <h2 className='section-title title-features'><FormattedMessage id="features.title"/></h2>
                    <div className='section-text text-features text-features-main'><FormattedMessage
                        id="features.text"/></div>
                    <Fade bottom>
                        <div className='features-item-wrap row'>
                            <div className='col-sm-4 col-xs-12'>
                                <div className='features-item'>
                                    <div className='features-item-title'><span
                                        className="icon icon-secure"></span><FormattedMessage id="features.item1Title"/>
                                    </div>
                                    <div className="features-item-text">
                                        <FormattedMessage id="features.item1Text"/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4 col-xs-12'>
                                <div className='features-item'>
                                    <div className='features-item-title'><span
                                        className="icon icon-reliable"></span><FormattedMessage
                                        id="features.item2Title"/></div>
                                    <div className="features-item-text">
                                        <FormattedMessage id="features.item2Text"/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4 col-xs-12'>
                                <div className='features-item'>
                                    <div className='features-item-title'><span
                                        className="icon icon-convenient"></span><FormattedMessage
                                        id="features.item3Title"/>
                                    </div>
                                    <div className="features-item-text">
                                        <FormattedMessage id="features.item3Text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='section-assets row'>
                            <div className='section-assets-text col-xs-12 col-md-5 pull-left'>
                                <h2 className='section-title title-features'><FormattedMessage
                                    id="assetsManagement.title"/></h2>
                                <div className='section-text text-features'>
                                    <FormattedMessage id="assetsManagement.text1"/><br/><br/>
                                    <FormattedMessage id="assetsManagement.text2"/><br/><br/>
                                    <FormattedMessage id="assetsManagement.text3"/>
                                </div>
                            </div>
                            <img src='/static/asset-phone.png'
                                 className='section-assets-img col-xs-12 col-md-7 pull-right'/>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className='section-market row'>
                            <div className='section-market-text col-xs-12 col-md-5 pull-right'>
                                <h2 className='section-title title-features'><FormattedMessage
                                    id="marketInformation.title"/></h2>
                                <div className='section-text text-features'>
                                    <FormattedMessage id="marketInformation.text1"/><br/><br/>
                                    <FormattedMessage id="marketInformation.text2"/><br/><br/>
                                    <FormattedMessage id="marketInformation.text3"/>
                                </div>
                            </div>
                            <img src='/static/market-phone.png'
                                 className='section-market-img col-xs-12 col-md-7 pull-left'/>
                        </div>
                    </Fade>
                </div>
            </section>
        )
    }
}

export default SectionFeature