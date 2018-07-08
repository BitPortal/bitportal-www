import React from 'react'
import './footer.less'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='container footer-container'>
                    <div className="row">
                        <div className="col-md-2 col-xs-6">
                            <ul className="footer-link-wrap">
                                <li><a href="#">Home</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-xs-6">
                            <ul className="footer-link-wrap">
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-xs-12 footer-location">
                            <span>Shanghai Pudong District</span>
                            <span className="icon icon-locate"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="social-link">
                            <div className="social-link-item">
                                <a href="https://github.com/BitPortal">
                                    <span className="icon icon-github"></span>
                                    <span className="social-link-text">Github</span>
                                </a>
                            </div>
                            <div className="social-link-item">
                                <a href="https://t.me/BitPortal_official_EN">
                                    <span className="icon icon-telegram"></span>
                                    <span className="social-link-text">Telegram</span>
                                </a>
                            </div>
                            <div className="social-link-item">
                                <a href="#">
                                    <span className="icon icon-wechat"></span>
                                    <span className="social-link-text">Wechat</span>
                                </a>
                            </div>
                            <div className="social-link-item">
                                <a href="https://discordapp.com/invite/ZRUvfxV">
                                    <span className="icon icon-discord"></span>
                                    <span className="social-link-text">Discord</span>
                                </a>
                            </div>
                            <div className="social-link-item">
                                <a href="https://twitter.com/BitPortal_IO">
                                    <span className="icon icon-twitter"></span>
                                    <span className="social-link-text">Twitter</span>
                                </a>
                            </div>
                        </div>
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