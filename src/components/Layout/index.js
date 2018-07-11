import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {injectIntl} from 'react-intl'

import MobileBlocks from '../IndexPage/MobileBlocks'

import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/icons.less'
import '../../styles/ui.less'

import Header from '../Header'
import Footer from '../Footer'


import './style.less'


class Layout extends React.Component {
    constructor({props, children, data, intl}) {
        super(props)
        this.data = data
        this.children = children
    }

    render() {
        return (
            <div className="index-root">
                <Helmet>
                    <title>Bitportal - The Portal of the Internet of value</title>
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
                <Header/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
                <MobileBlocks/>
            </div>
        )
    }
}


// Layout.propTypes = {
//     children: PropTypes.func,
// }

export default injectIntl(Layout)
