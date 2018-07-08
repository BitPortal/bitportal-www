import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl'
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
import './icons.less'
import './ui.less'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.less'

class Layout extends React.Component {
    constructor ({props, children, data}) {
        super(props)
        this.data = data
        this.children = children
    }
    render () {
        return (
            <IntlProvider locale="en" messages={messages['en']}>
                <div className="index-root">
                    <Helmet
                        title={this.data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Sample' },
                            { name: 'keywords', content: 'sample, something' },
                        ]}
                    />
                    <Header siteTitle={this.data.site.siteMetadata.title} />
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
