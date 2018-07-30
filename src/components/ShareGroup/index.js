import React from 'react'
import {TelegramShareButton, TwitterShareButton, FacebookShareButton} from 'react-share'
// import ChinaShare from 'social-share-react'
import './style.less'

class ShareGroup extends React.Component {
    componentDidMount () {
        //add text for weibo and wechat
        let weiboText = document.createElement('span')
        weiboText.innerHTML = 'Weibo'
        document.getElementsByClassName('icon-wechat')[0].parentNode.appendChild(weiboText)
    }
    render() {
        let socialLinkType = this.props.linkType,
            currentLocation = typeof location !== 'undefined' ? location.href : '',
            ShareBlock
        if (socialLinkType === 'share') {
            ShareBlock = <div className='row social-link social-link-gradient'>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a className="social-link-item">
                        <FacebookShareButton url={currentLocation}>
                            <span className="icon icon-github"></span>
                            <span className="social-link-text">Facebook</span>
                        </FacebookShareButton>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a className="social-link-item">
                        <TwitterShareButton url={currentLocation}>
                            <span className="icon icon-twitter"></span>
                            <span className="social-link-text">Twitter</span>
                        </TwitterShareButton>
                    </a>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-2">
                    <a className="social-link-item">
                        <TelegramShareButton url={currentLocation}>
                            <span className="icon icon-telegram"></span>
                            <span className="social-link-text">Telegram</span>
                        </TelegramShareButton>
                    </a>
                </div>
                {/*<div className='col-xs-6 col-sm-4 col-md-2'>*/}
                    {/*<ChinaShare url={currentLocation} sites={['wechat']}>*/}
                        {/*<a href="#" key='wechat' className='social-link-item'>*/}
                            {/*/!*<span className="icon icon-weixin"></span>*!/*/}
                            {/*/!*<span className="social-link-text">Wechat</span>*!/*/}
                        {/*</a>*/}
                    {/*</ChinaShare>*/}
                {/*</div>*/}
                {/*<div className='col-xs-6 col-sm-4 col-md-2'>*/}
                    {/*<ChinaShare url={currentLocation} sites={['weibo']}>*/}
                        {/*<a href="#" key='weibo' className='social-link-item'>*/}
                            {/*/!*<span className="icon icon-weibo"></span>*!/*/}
                            {/*/!*<span className="social-link-text">Weibo</span>*!/*/}
                        {/*</a>*/}
                    {/*</ChinaShare>*/}
                {/*</div>*/}
            </div>
        } else {
            ShareBlock = <div className='row social-link social-link-dark'>
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
        }
        return ShareBlock
    }
}

export default ShareGroup