import React from 'react'
import Link from 'gatsby-link'
import './header.less'

import Logo from '../../../static/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.switchLanguage = this.switchLanguage.bind(this)
        this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this)
        this.currentLanguage = '简体中文'
    }
    switchLanguage() {

    }
    toggleLanguageMenu() {

    }
    render() {
        return (
            <div className='container'>
                <header>
                    <img className='logo' src={Logo}/>
                    <a className="language-switch" onClick={this.toggleLanguageMenu}>
                        <span>{this.currentLanguage}</span>
                        <ul className='language-menu' v-show="showLanguageMenu" onClick={this.stopPropagation}>
                            <li v-show="currentLocale == 'zh'" onClick={this.switchLanguage.bind(this, 'en')}><a
                                href="#">English</a></li>
                            <li v-show="currentLocale == 'en'" onClick={this.switchLanguage.bind(this, 'zh')}><a
                                href="#">简体中文</a></li>
                        </ul>
                    </a>
                </header>
            </div>
        )
    }
}

export default Header
