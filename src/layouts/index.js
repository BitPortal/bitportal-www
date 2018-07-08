import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {IntlProvider, addLocaleData} from 'react-intl'
import enTrans from '../i18n/en.js'
import zhTrans from '../i18n/zh.js'
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
addLocaleData([...en, ...zh])

let messages = {
    'en': enTrans,
    'zh': zhTrans
}

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/icons.less'
import '../styles/ui.less'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.less'

class Layout extends React.Component {
    constructor ({props, children, data}) {
        super(props)
        this.changeLanguage = this.changeLanguage.bind(this)
        this.data = data
        this.children = children
        this.state = {
            language: (navigator.language || navigator.browserLanguage).slice(0, 2)
        }
    }
    changeLanguage(lang) {
        this.setState({language: lang})
    }
    render () {
        return (
            <IntlProvider locale={this.state.language} key={this.state.language} messages={messages[this.state.language]}>
                <div className="index-root">
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
