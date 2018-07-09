import React from 'react'
import './style.less'

class ShareGroup extends React.Component {
    render() {
        let socialLinkTheme = this.props.theme
        let socialLinkClass = ''
        if (socialLinkTheme === 'gradient') {
            socialLinkClass = 'row social-link social-link-gradient'
        } else {
            socialLinkClass = 'row social-link social-link-dark'
        }
        return (
            <div className={socialLinkClass}>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a href="https://github.com/BitPortal" className="social-link-item">
                        <span className="icon icon-github"></span>
                        <span className="social-link-text">Github</span>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a href="https://t.me/BitPortal_official_EN" className="social-link-item">
                        <span className="icon icon-telegram"></span>
                        <span className="social-link-text">Telegram</span>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a href="#" className="social-link-item">
                        <span className="icon icon-wechat"></span>
                        <span className="social-link-text">Wechat</span>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a href="https://discordapp.com/invite/ZRUvfxV" className="social-link-item">
                        <span className="icon icon-discord"></span>
                        <span className="social-link-text">Discord</span>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a href="https://twitter.com/BitPortal_IO" className="social-link-item">
                        <span className="icon icon-twitter"></span>
                        <span className="social-link-text">Twitter</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default ShareGroup