import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {injectIntl} from 'react-intl'
import config from 'react-reveal/globals'

import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/icons.less'
import '../../styles/ui.less'
import './style.less'

import Header from '../Header'
import Footer from '../Footer'
import MobileBlocks from '../IndexPage/MobileBlocks'


/* enable animation ssr */
// config({ssrFadeout: true})

class Layout extends React.Component {
    static contextTypes = {
        language: PropTypes.object
    }
    constructor({props, children, data}) {
        super(props)
        this.data = data
        this.children = children
        this.setLanguage = this.setLanguage.bind(this);
        this.state = {
            webview: false,
            language: ''
        }
    }


    componentWillMount() {
        //set global language
        if (typeof localStorage !== 'undefined' && localStorage.getItem('language')){
            this.state.language = localStorage.getItem('language')
        }else if (typeof window !== 'undefined') {
            this.state.language = (navigator.language || navigator.browserLanguage).slice(0, 2)
        }else {
            this.state.language = 'en'
        }
        //
        // if(this.state.language !== this.context.language.locale){
        //     console.log(789)
        //     this.setLanguage(this.state.language)
        // }

        //webview mode, will hide header and footer
        if(typeof location !== 'undefined' && location.href.indexOf('webview=true') !== -1){
            this.setState({
                webview: true
            })
        }
    }

    setLanguage(lang) {
        const originalPath = this.context.language.originalPath || this.context.originalPath || '/'
        this.setState({
            language: lang,
        })
        localStorage.setItem('language', lang)
        window.location.href= `${lang === 'en' ? '' : '/' + lang}${originalPath}`
    }

    render() {
        console.log(888)
        return (
            <div className={(this.state.webview === true ? 'webview-page' : null) + ' index-root'}>
                <Helmet>
                    <title>BitPortal - The Portal of the Internet of value</title>
                    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                    <link rel="shortcut icon" href="/static/favicon.ico"/>
                    <link rel="canonical" href="https://www.bitportal.io/"/>
                    <meta name="baidu-site-verification" content="BYgg29bFbl"/>
                    <meta name="google-site-verification" content="Wv3KiSQpcA3P3ti2Wi87x4wyDyWD2gfFrPsZEEZizXw"/>
                    <meta name="description"
                          content="BitPortal is a well-designed EOS wallet. It supports EOS voting event, EOS based asset management and markets data display. Welcome to BitPortal. Your Portal to the Internet of Value!"/>
                    <meta name="twitter:site" content="@BitPortal_IO"/>
                    <meta name="twitter:creator" content="@BitPortal_IO"/>
                    <meta name="twitter:title" content="BitPortal - The Portal of the Internet of Value"/>
                    <meta name="twitter:image" content="/static/open-graph/twitter-card.jpg"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:summary" content="Page summary'"/>
                    <meta name="twitter:description"
                          content="BitPortal is a well-designed EOS wallet. It supports EOS voting event, EOS based asset management and markets data display. Welcome to BitPortal. Your Portal to the Internet of Value!"/>
                    <meta property="og:title" content="BitPortal - The Portal of the Internet of Value"/>
                    <meta property="og:description"
                          content="BitPortal is a well-designed EOS wallet. It supports EOS voting event, EOS based asset management and markets data display. Welcome to BitPortal. Your Portal to the Internet of Value!"/>
                    <meta property="og:image" content="/static/open-graph/open-graph.jpg"/>
                    <meta property="og:locale'" content="en_US"/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://www.bitportal.io/"/>
                    <meta property="og:site_name" content="BitPortal'"/>
                </Helmet>
                {this.state.webview || <Header language={this.state.language} setLanguage={this.setLanguage}/>}
                <div>
                    {this.props.children}
                </div>
                {this.state.webview || <Footer/>}
                <MobileBlocks/>
            </div>
        )
    }
}


// Layout.propTypes = {
//     children: PropTypes.func,
// }

export default injectIntl(Layout)

