import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {IntlProvider, addLocaleData} from 'react-intl'
import enTrans from '../i18n/en.js'
import zhTrans from '../i18n/zh.js'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/icons.less'
import '../styles/ui.less'

import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileBlocks from '../components/IndexPage/MobileBlocks'


import './index.less'

addLocaleData([...en, ...zh])

let messages = {
    'en': enTrans,
    'zh': zhTrans
}

class Layout extends React.Component {
    constructor ({props, children, data}) {
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.data = data
        this.children = children
        let navigatorLanguage
        if(typeof window !== 'undefined'){
            navigatorLanguage = (navigator.language || navigator.browserLanguage).slice(0, 2)
        }
        this.state = {
            language: navigatorLanguage
        }
    }
    changeLanguage(lang) {
        this.setState({language: lang})
        console.log(document.cookie)
    }
    render () {
        return (
            <IntlProvider locale={this.state.language} key={this.state.language} messages={messages[this.state.language]}>
                <div className="index-root">
                    <Helmet>
                        <title>Bitportal - The Portal of the Internet of value</title>
                        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
                        <link rel="shortcut icon" href="/static/favicon.ico"/>
                        <link rel="canonical" href="https://www.bitportal.io/" />
                        <meta name="baidu-site-verification" content="BYgg29bFbl" />
                        <meta name="google-site-verification" content="Wv3KiSQpcA3P3ti2Wi87x4wyDyWD2gfFrPsZEEZizXw" />
                        <meta name="description" content="BitPortal is a well-designed EOS wallet. It supports EOS voting event, EOS based asset management and markets data display. Welcome to BitPortal. Your Portal to the Internet of Value!"/>
                        <meta name="twitter:site" content="@BitPortal_IO"/>
                        <meta name="twitter:creator" content="@BitPortal_IO"/>
                        <meta name="twitter:title" content="BitPortal - The Portal of the Internet of Value"/>
                        <meta name="twitter:image" content="/static/open-graph/twitter-card.jpg"/>
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta name="twitter:summary" content="Page summary'"/>
                        <meta name="twitter:description" content="BitPortal is a well-designed EOS wallet. It supports EOS voting event, EOS based asset management and markets data display. Welcome to BitPortal. Your Portal to the Internet of Value!"/>
                        <meta property="og:title" content="BitPortal - The Portal of the Internet of Value"/>
                        <meta property="og:description" content="BitPortal is a well-designed EOS wallet. It supports EOS voting event, EOS based asset management and markets data display. Welcome to BitPortal. Your Portal to the Internet of Value!"/>
                        <meta property="og:image" content="/static/open-graph/open-graph.jpg"/>
                        <meta property="og:locale'" content="en_US"/>
                        <meta property="og:type" content="website"/>
                        <meta property="og:url" content="https://www.bitportal.io/"/>
                        <meta property="og:site_name" content="BitPortal'"/>
                    </Helmet>
                    <Helmet
                        title={this.data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' },
                        ]}
                    />
                    <Header siteTitle={this.data.site.siteMetadata.title} onLanguageChange={this.changeLanguage} currentLanguage={this.state.language} />
                    <div>
                        {this.children()}
                    </div>
                    <Footer/>
                    <MobileBlocks/>
                </div>
            </IntlProvider>
        )
    }
}
// const Layout = ({ children, data }) => (
//   <div className="index-root">
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//     />
//     <Header siteTitle={data.site.siteMetadata.title} />
//       {/*<SectionBanner/>*/}
//
//       <div>
//       {children()}
//     </div>
//     <Footer/>
//   </div>
// )

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
