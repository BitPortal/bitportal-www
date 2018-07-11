import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Link} from '../../i18n'
import PropTypes from 'prop-types'
import './style.less'

class Header extends React.Component {
    static contextTypes = {
        language: PropTypes.object
    }
    constructor(props) {
        super(props)
        let navigatorLanguage = ''
        if (typeof window !== 'undefined') {
            navigatorLanguage = (navigator.language || navigator.browserLanguage).slice(0, 2)
        }

        this.switchLanguage = this.switchLanguage.bind(this)
        this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this)
        this.state = {
            language: navigatorLanguage,
            currentLanguage: navigatorLanguage === 'en' ? 'English' : '简体中文'
        }
    }

    switchLanguage(lang, event) {
        const originalPath = this.context.language.originalPath || '/'
        this.setState({
            language: lang,
            currentLanguage: lang === 'en' ? 'English' : '简体中文'
        })
        window.location.href= `/${lang}${originalPath}`
    }

    toggleLanguageMenu() {
        let languageMenuClass = document.getElementsByClassName('language-menu')[0].className
        let languageGlyphicon = document.getElementsByClassName('language-glyphicon')[0].className
        if (languageMenuClass.indexOf('hidden') > -1) {
            document.getElementsByClassName('language-menu')[0].className = languageMenuClass.replace('hidden', '')
            document.getElementsByClassName('language-glyphicon')[0].className = languageGlyphicon.replace('glyphicon-chevron-up', 'glyphicon-chevron-down')
        } else {
            document.getElementsByClassName('language-menu')[0].className += ' hidden'
            document.getElementsByClassName('language-glyphicon')[0].className = languageGlyphicon.replace('glyphicon-chevron-down', 'glyphicon-chevron-up')
        }
    }

    render() {
        let languageItem = ''
        if (this.state.language === 'en') {
            languageItem = <li onClick={this.switchLanguage.bind(this, 'zh')}><Link
                to="#">简体中文</Link></li>
        } else {
            languageItem = <li onClick={this.switchLanguage.bind(this, 'en')}><Link
                to="#">English</Link></li>
        }
        return (
            <div className='container'>
                <header>
                    <img className='logo' src='/static/logo.png'/>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li><Link to="/"><FormattedMessage id="nav.home"/></Link></li>
                            <li><Link to="/blog"><FormattedMessage id="nav.blog"/></Link></li>
                        </ul>
                    </nav>
                    <div className="language-switch" onClick={this.toggleLanguageMenu}>
                        <span>{this.state.currentLanguage}</span>
                        <span className="glyphicon glyphicon-chevron-up language-glyphicon"> </span>
                        <ul className='language-menu hidden' onClick={this.stopPropagation}>
                            {languageItem}
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
//
// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
