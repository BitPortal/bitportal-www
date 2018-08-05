import React from 'react'
import ShareGroup from '../ShareGroup'
import './style.less'
import {FormattedMessage} from 'react-intl'

class Footer extends React.Component {
    componentDidMount () {
        /* TODO test if this works */

        /* Google Anylytics */
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-119175675-1', 'auto');
        ga('send', 'pageview');

        /* Baidu Analytics */
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?f50ae0b4f5402a28af8e3d2ae9e272dc";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    }
    render() {
        return (
            <div>
                <footer>
                    <div className='container footer-container'>
                        <div className="row">
                            <div className="col-md-2 col-xs-6">
                                <ul className="footer-link-wrap">
                                    <li><a href="/"><FormattedMessage id="nav.home"/></a></li>
                                    <li><a href="/tos"><FormattedMessage id="nav.tos"/></a></li>
                                    <li><a href="/release-notes"><FormattedMessage id="nav.releaseNotes"/></a></li>
                                    {/*<li><a href="/help"><FormattedMessage id="nav.helpCenter"/></a></li>*/}
                                </ul>
                            </div>
                            <div className="col-md-2 col-xs-6">
                                <ul className="footer-link-wrap">
                                    <li><a href="/blog"><FormattedMessage id="nav.blog"/></a></li>
                                </ul>
                            </div>
                            <div className="footer-location">
                                <span><FormattedMessage id="address"/></span>
                                <span className="icon icon-locate"></span>
                            </div>
                        </div>
                        <ShareGroup linkType={'follow'}/>
                    </div>
                    <div className="footer-logo">
                        <div className="container">
                            <img src="/static/logo.png" className="footer-logo-img"/>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer