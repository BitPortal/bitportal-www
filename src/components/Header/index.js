import React from 'react'
import Link from 'gatsby-link'
import './header.less'
import classNames from 'classNames'

import Logo from '../../../static/static/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.switchLanguage = this.switchLanguage.bind(this)
        this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this)
        this.currentLanguage = '简体中文'
    }
    switchLanguage() {
        //set locale here
    }
    toggleLanguageMenu() {
        console.log('0000')
        let languageMenuClass = document.getElementsByClassName('language-menu')[0].className
        let languageGlyphicon = document.getElementsByClassName('language-glyphicon')[0].className
        if (languageMenuClass.indexOf('hidden') > -1){
            document.getElementsByClassName('language-menu')[0].className = languageMenuClass.replace('hidden', '')
            document.getElementsByClassName('language-glyphicon')[0].className = languageGlyphicon.replace('glyphicon-chevron-down', 'glyphicon-chevron-up')
        }else {
            document.getElementsByClassName('language-menu')[0].className += ' hidden'
            document.getElementsByClassName('language-glyphicon')[0].className = languageGlyphicon.replace('glyphicon-chevron-up', 'glyphicon-chevron-down')
        }
    }
    render() {
        return (
            <div className='container'>
                <header>
                    <img className='logo' src='/static/logo.png'/>
                    <div className="language-switch" onClick={this.toggleLanguageMenu}>
                        <span>{this.currentLanguage}</span>
                        <span className="glyphicon glyphicon-chevron-up language-glyphicon"> </span>
                        <ul className='language-menu hidden' onClick={this.stopPropagation}>
                            <li data-show="currentLocale == 'zh'" onClick={this.switchLanguage.bind(this, 'en')}><a
                                href="#">English</a></li>
                            <li data-show="currentLocale == 'en'" onClick={this.switchLanguage.bind(this, 'zh')}><a
                                href="#">简体中文</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
