import React from 'react'
import ShareGroup from '../ShareGroup'
import './style.less'
import {FormattedMessage} from 'react-intl'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container footer-container'>
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <ul className="footer-link-wrap">
                                <li><a href="#"><FormattedMessage id="nav.home"/></a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <ul className="footer-link-wrap">
                                <li><a href="#"><FormattedMessage id="nav.blog"/></a></li>
                            </ul>
                        </div>
                        <div className="footer-location">
                            <span><FormattedMessage id="address"/></span>
                            <span className="icon icon-locate"></span>
                        </div>
                    </div>
                    <div className="row">
                        <ShareGroup theme={'dark'}/>
                    </div>
                </div>
                <div className="footer-logo">
                    <div className="container">
                        <img src="/static/logo.png" className="footer-logo-img"/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer