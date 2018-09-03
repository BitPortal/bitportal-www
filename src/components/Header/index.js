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
        this.setLanguage = this.setLanguage.bind(this)
        this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this)
        this.toggleNavMenu = this.toggleNavMenu.bind(this)
        this.state = {
            currentLanguage: this.props.language === 'en' ? 'English' : '简体中文'
        }
    }

    setLanguage(lang) {
        this.props.setLanguage(lang);
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

    toggleNavMenu () {
        let headerNav = document.getElementsByClassName('header-nav')[0]
        if (headerNav.style.display === 'none' || !headerNav.style.display ){
            headerNav.style.display = 'block'
        }else {
            headerNav.style.display = 'none'
        }
    }

    render() {
        let languageItem = ''
        if (this.props.language === 'en') {
            languageItem = <li onClick={this.setLanguage.bind(this, 'zh')}>简体中文</li>
        } else {
            languageItem = <li onClick={this.setLanguage.bind(this, 'en')}>English</li>
        }
        return (
            <div className='container'>
                <header>
                    <Link to={'/'}>
                        <img className='logo' src='/static/logo.png'/>
                    </Link>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li><Link to="/"><FormattedMessage id="nav.home"/></Link></li>
                            <li><Link to="/blog"><FormattedMessage id="nav.blog"/></Link></li>
                        </ul>
                    </nav>
                    <span className="glyphicon glyphicon-menu-hamburger header-nav-toggle" onClick={this.toggleNavMenu}> </span>
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